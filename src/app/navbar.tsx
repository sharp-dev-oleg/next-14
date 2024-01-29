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
import {useToken} from "@/hooks/useToken";

export default function Navbar() {
  const {token, setToken} = useToken();
  const [userInfo, setUserInfo] = useState<UserInfo>();

  useEffect(() => {
    (async () => {
      if (token) {
        setUserInfo((await getUserInfo(token)).user_info_token);
      }
    })();
  }, [token]);

  const exit = useCallback(() => {
    setToken('');
  }, [setToken]);

  return (
    <NextUiNavbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">Transactions</p>
      </NavbarBrand>
      <NavbarContent className="gap-4" justify="center">
        {token ? <>
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
        </> : <>
        <NavbarItem>
          <Link color="foreground" href="/">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="success" href="/register">
            Register
          </Link>
        </NavbarItem>
      </>}
      </NavbarContent>
      {token && (
        <NavbarContent justify="end">
          <NavbarItem>
            <NavbarUser userInfo={userInfo} />
          </NavbarItem>
          <NavbarItem>
            <Button onClick={exit} color="primary" href="#" variant="flat">Exit</Button>
          </NavbarItem>
        </NavbarContent>
      )}
    </NextUiNavbar>
  );
}