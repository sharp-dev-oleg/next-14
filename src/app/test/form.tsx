'use client';

import {Button} from "@nextui-org/button";
import {register} from '@/app/api/register';

export default function Form() {

  return (
    <Button onClick={() => register()}>Click me</Button>
  )
}
