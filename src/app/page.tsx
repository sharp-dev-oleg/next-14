import styles from './page.module.css'
import MainPageContent from "@/app/mainPageContent";

export default function Home() {
  return (
    <main className={styles.main}>
      <MainPageContent />
    </main>
  )
}
