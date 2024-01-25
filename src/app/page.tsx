import styles from './page.module.css'
import Link from 'next/link'
import {Divider} from "@nextui-org/react";
import MainPageContent from "@/app/mainPageContent";

export default function Home() {
  return (
    <main className={styles.main}>
      <MainPageContent />
      <Divider className="m-2" />
      <p>
        <Link className="text-sm text-blue-500" href="/register">Register</Link>
      </p>
    </main>
  )
}
