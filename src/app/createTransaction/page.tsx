import Form from "./transactionForm";
import styles from "./page.module.css";
import {PrivatePage} from "@/app/components/privatePage";

export default function CreateTransaction() {
  return (
    <PrivatePage>
      <main className={styles.main}>
        <Form />
      </main>
    </PrivatePage>
  )
}
