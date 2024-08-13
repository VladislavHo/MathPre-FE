import Image from "next/image";
import styles from "./page.module.css";
import SignForm from "./components/Forms/SignForm/SignForm";
import { getUserSession } from "./lib/get-user-session";
import { redirect } from "next/navigation";
import Nav from "./components/Nav/Nav";

export default function Home() {


  redirect('/signin')

  return (
    <main className={styles.main}>

    </main>
  );
}
