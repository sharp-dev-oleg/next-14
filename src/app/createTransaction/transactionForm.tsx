'use client';

import {useFormState} from 'react-dom';
import {useRouter} from 'next/navigation'
import {Button} from "@nextui-org/button";
import {Input, Chip} from "@nextui-org/react";

interface FormState {
  error: string
}

export default function Form() {
  const router = useRouter()
  const [state, formAction] = useFormState<FormState, FormData>(async (state, formData) => {
    try {
      console.log('formData', formData.entries());
      // TODO: send request
      return {
        error: ''
      }
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
      <Input type="text" name="name" isRequired label="Name" placeholder="Enter name"/>
      <Input type="number" name="amount" isRequired label="Amount" placeholder="Enter amount"/>
      <p className="flex gap-4 items-center">
        <Button type="submit">Send</Button>
        {state.error && (<Chip color="danger">{state.error}</Chip>)}
      </p>
    </form>
  )
}
