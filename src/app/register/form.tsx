'use client';

import {useFormState} from 'react-dom';
import { useRouter } from 'next/navigation'
import {Button} from "@nextui-org/button";
import {Input, Chip} from "@nextui-org/react";
import {register} from '@/app/api/register';

interface FormState {
  error: string
}

export default function Form() {
  const router = useRouter()
  const [state, formAction] = useFormState<FormState, FormData>(async (state, formData: FormData) => {
    try {
      const response = await register(
        formData.get('username') as string,
        formData.get('email') as string,
        formData.get('password') as string
      );
      router.push('/');
      return {
        error: ''
      };
    }
    catch(e) {
      return {
        error: (e as Error)?.message ?? 'Unknown error'
      }
    }
  }, {
    error: ''
  });

  return (
    <form className="flex w-full md:w-1/2 flex-wrap gap-4" action={formAction}>
      <Input type="text" name="username" isRequired label="Username" placeholder="Enter your username"/>
      <Input type="email" name="email" isRequired label="Email" placeholder="Enter your email"/>
      <Input type="password" name="password" isRequired label="Password" placeholder="Enter your password"/>
      <p className="flex gap-4 items-center">
        <Button type="submit">Submit</Button>
        {state.error && (<Chip color="danger">{state.error}</Chip>)}
      </p>
    </form>
  )
}