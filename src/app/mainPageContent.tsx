'use client';

import {useCallback, useEffect, useState} from "react";
import {getTransactions, Transaction} from "@/api/transactions";
import {Divider} from "@nextui-org/react";
import Link from "next/link";
import Login from "./login";
import {Transactions} from "./transactions";
import {useToken} from "@/hooks/useToken";

export default function MainPageContent() {
  const {token, setToken} = useToken();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  useEffect(() => {
    if (token) {
      (async () => {
        const transactions = await getTransactions(token);
        setTransactions(transactions?.trans_token ?? [])
      })();
    }
    else {
      setTransactions([]);
    }
  }, [token]);

  const onLogin = useCallback((token: string) => {
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