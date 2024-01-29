// app/providers.tsx
'use client'

import {NextUIProvider} from '@nextui-org/react'
import {TokenProvider} from "@/hooks/useToken";

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <TokenProvider>
        {children}
      </TokenProvider>
    </NextUIProvider>
  )
}