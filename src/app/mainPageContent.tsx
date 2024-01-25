'use client';

import {useCallback, useEffect, useState} from "react";
import {getTransactions} from "@/app/api/transactions";
import Login from "./login";
import Navbar from "./navbar";
import {Divider} from "@nextui-org/react";
import Link from "next/link";

export default function MainPageContent() {
  const [token, setToken] = useState('');
  useEffect(() => {
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
    (
      <>
        <Navbar/>
        <p>Logged in</p>
      </>
    ) : (
      <>
        <Login onLogin={onLogin}/>
        <Divider className="m-2"/>
        <p>
          <Link className="text-sm text-blue-500" href="/register">Register</Link>
        </p>
      </>
    )

}