import { TestComponent } from "@/app/react-pdf/TestComponent";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <TestComponent />
    </main>
  );
}
