'use client';

import {Button} from "@nextui-org/button";
import {Input} from "@nextui-org/react";
import {login, LoginResponse} from "@/api/login";
import {useFormState} from "react-dom";

interface LoginProps {
  onLogin: (token: string) => void
}

interface FormState {
  error: string
}

export default function Login({ onLogin }: LoginProps) {
  const [state, formAction] = useFormState<FormState, FormData>(async (state, formData: FormData) => {
    try {
      const response = await login(
        formData.get('email') as string,
        formData.get('password') as string
      ) as LoginResponse;
      onLogin(response.id_token);

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
      <Input type="email" name="email" isRequired label="Email" placeholder="Enter your email"/>
      <Input type="password" name="password" isRequired label="Password" placeholder="Enter your password"/>
      <p className="flex gap-4 items-center">
        <Button type="submit" color="primary">Login</Button>
      </p>
    </form>
  )
}
