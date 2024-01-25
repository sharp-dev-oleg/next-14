'use client';

import {useCallback, useEffect, useState} from "react";
import Login from "@/app/login";
import {getTransactions} from "@/app/api/transactions";

export default function MainPageContent() {
  const [token, setToken] = useState('');
  useEffect( () => {
    const token = localStorage.getItem('token') ?? ''
    if (token) {
      (async () => {
        const transactions = await getTransactions(token);
        console.log(transactions);
      })();
    }

    setToken(token);
  }, []);

  const onLogin = useCallback((token: string) => {
    localStorage.setItem('token', token);
    setToken(token);
  }, [setToken]);

  return token ?
    (<p>Logged in</p>) :
    <Login onLogin={onLogin}/>
}