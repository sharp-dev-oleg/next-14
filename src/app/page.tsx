import styles from './page.module.css'
import Link from 'next/link'
import Login from "./login";
import {Divider} from "@nextui-org/react";

export default function Home() {
  return (
    <main className={styles.main}>
      <Login />
      <Divider className="m-2" />
      <p>
        <Link className="text-sm text-blue-500" href="/register">Register</Link>
      </p>
    </main>
  )
}
