'use client';

import {useFormState} from 'react-dom';
import {Button} from "@nextui-org/button";
import {Input, Chip} from "@nextui-org/react";
import {createTransaction} from "@/app/api/createTransaction";
import {useRef} from "react";

interface FormState {
  error: string
  success: boolean
}

export default function Form() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState<FormState, FormData>(async (state, formData) => {
    try {
      await createTransaction(
        formData.get('name') as string,
        formData.get('amount')  as string,
        localStorage.getItem('token') ?? ''
      )
      formRef.current?.reset();
      return {
        error: '',
        success: true
      }
    }
    catch(e) {
      return {
        error: (e as Error)?.message ?? 'Unknown error',
        success: false
      }
    }
  }, {
    error: '',
    success: false
  });

  return (
    <form ref={formRef} className="flex w-full md:w-1/2 flex-wrap gap-4" action={formAction}>
      <Input type="text" name="name" isRequired label="Username" placeholder="Enter name"/>
      <Input type="number" name="amount" isRequired label="Amount" placeholder="Enter amount"/>
      <div className="flex gap-4 items-center">
        <Button type="submit">Send</Button>
        {state.error && (<Chip color="danger">{state.error}</Chip>)}
        {state.success && (<Chip color="success">Successfully sent!</Chip>)}
      </div>
    </form>
  )
}
