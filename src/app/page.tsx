'use client';

import styles from './page.module.css'
import {Button} from '@nextui-org/button';
import {useRouter} from "next/navigation";
import {useCallback} from "react";

export default function Home() {
  const router = useRouter()
  const onClick = useCallback(() => {
    router.push('/register')
  }, [router]);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <p>
          <Button color="success" onClick={onClick}>Register</Button>
        </p>
      </div>
    </main>
  )
}
