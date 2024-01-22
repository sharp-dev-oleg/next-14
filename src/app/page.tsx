import styles from './page.module.css'
import {Button} from '@nextui-org/button';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <p>
          <Button>Click me</Button>
        </p>
      </div>
    </main>
  )
}
