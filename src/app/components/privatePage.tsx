'use client'

import {PropsWithChildren, useEffect} from "react";
import {redirect} from "next/navigation";
import {useToken} from "@/hooks/useToken";

export const PrivatePage = ({ children }: PropsWithChildren) => {
  const {token} = useToken();
  useEffect(() => {
    if (!token) {
      redirect('/')
    }
  }, [token]);

  if (!token) {
    return null;
  }

  return children;
};