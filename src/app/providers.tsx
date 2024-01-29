// app/providers.tsx
'use client'

import {NextUIProvider} from '@nextui-org/react'
import {TokenProvider} from "@/hooks/useToken";
import {PropsWithChildren} from "react";

interface ProvidersProps extends PropsWithChildren {
  initialToken: string
}

export function Providers({children, initialToken}: ProvidersProps) {
  return (
    <NextUIProvider>
      <TokenProvider initialToken={initialToken}>
        {children}
      </TokenProvider>
    </NextUIProvider>
  )
}