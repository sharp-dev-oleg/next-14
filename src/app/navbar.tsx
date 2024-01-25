import {
  Navbar as NextUiNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import {Button} from "@nextui-org/button";
import {useCallback} from "react";

export default function Navbar() {
  const exit = useCallback(() => {
    'use client';
    localStorage.removeItem('token');
    location.reload();
  }, []);

  return (
    <NextUiNavbar className="-mt-24">
      <NavbarBrand>
        <p className="font-bold text-inherit">Transactions</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button onClick={exit} color="primary" href="#" variant="flat">Exit</Button>
        </NavbarItem>
      </NavbarContent>
    </NextUiNavbar>
  );
}