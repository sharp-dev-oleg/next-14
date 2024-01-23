'use client';

import { useFormState } from 'react-dom';
import {Button} from "@nextui-org/button";
import {Input} from "@nextui-org/react";
import {register} from '@/app/api/register';

export default function Form() {
  const [state, formAction] = useFormState<{}, FormData>(async (state, formData: FormData) => {
    const response = await register(
      formData.get('username') as string,
      formData.get('email') as string,
      formData.get('password') as string
    );
    console.log('response', response);
    return {};
  }, {});

  return (
    <form className="flex w-full flex-wrap md:flex-nowrap gap-4" action={formAction}>
      <Input type="text" name="username" isRequired label="Username" placeholder="Enter your username"/>
      <Input type="email" name="email" isRequired label="Email" placeholder="Enter your email"/>
      <Input type="password" name="password" isRequired label="Password" placeholder="Enter your password"/>
      <Button type="submit">Submit</Button>
    </form>
  )
}
