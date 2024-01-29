'use client';

import {useCallback, useEffect, useState} from "react";
import {getTransactions, Transaction} from "@/api/transactions";
import {Divider} from "@nextui-org/react";
import Link from "next/link";
import Login from "./login";
import {Transactions} from "./transactions";

export default function MainPageContent() {
  const [token, setToken] = useState('');
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  useEffect(() => {
    const token = localStorage.getItem('token') ?? ''
    if (token) {
      (async () => {
        const transactions = await getTransactions(token);
        setTransactions(transactions?.trans_token ?? [])
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
        <Transactions transactions={transactions} />
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