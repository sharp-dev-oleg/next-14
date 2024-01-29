'use client';

import {
  Navbar as NextUiNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import {Button} from "@nextui-org/button";
import {useCallback, useEffect, useState} from "react";
import Link from "next/link";
import NavbarUser from "@/app/navbarUser";
import {getUserInfo, UserInfo} from "@/api/userInfo";

export default function Navbar() {
  const [token, setToken] = useState('');
  const [userInfo, setUserInfo] = useState<UserInfo>();

  useEffect(() => {
    const token = localStorage.getItem('token') ?? '';
    setToken(token);

    (async () => {
      if (token) {
        setUserInfo((await getUserInfo(token)).user_info_token);
      }
    })();
  }, []);

  const exit = useCallback(() => {
    localStorage.removeItem('token');
    location.reload();
  }, []);

  if (!token) return null;

  return (
    <NextUiNavbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">Transactions</p>
      </NavbarBrand>
      <NavbarContent className="gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            List
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/createTransaction">
            New transaction
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <NavbarUser userInfo={userInfo} />
        </NavbarItem>
        <NavbarItem>
          <Button onClick={exit} color="primary" href="#" variant="flat">Exit</Button>
        </NavbarItem>
      </NavbarContent>
    </NextUiNavbar>
  );
}