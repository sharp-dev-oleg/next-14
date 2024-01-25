'use client';

import {useCallback, useEffect, useState} from "react";
import Login from "@/app/login";

export default function MainPageContent() {
  const [token, setToken] = useState('');
  useEffect(() => {
    setToken(localStorage.getItem('token') ?? '');
  }, []);

  const onLogin = useCallback((token: string) => {
    localStorage.setItem('token', token);
    setToken(token);
  }, [setToken]);

  return token ?
    (<p>Logged in</p>) :
    <Login onLogin={onLogin}/>
}