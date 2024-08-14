
import styles from "./page.module.css";

import { redirect } from "next/navigation";


export default function Home() {


  redirect('/signin')

  return (
    <main className={styles.main}>

    </main>
  );
}
