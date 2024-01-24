'use client';

import {Button} from "@nextui-org/button";
import {Input, Chip} from "@nextui-org/react";

export default function Login() {
  return (
    <form className="flex w-full md:w-1/2 flex-wrap gap-4">
      <Input type="email" name="email" isRequired label="Email" placeholder="Enter your email"/>
      <Input type="password" name="password" isRequired label="Password" placeholder="Enter your password"/>
      <p className="flex gap-4 items-center">
        <Button type="submit" color="primary">Login</Button>
      </p>
    </form>
  )
}
