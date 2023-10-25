import Image from "next/image";
import styles from "./page.module.css";
import ProfileClient from "../ProfileClient";

export default function Home() {
  return (
    <main className={styles.main}>
      <a href="/api/auth/login">Login</a>
      <a href="/api/auth/logout">Logout</a>
      <a href="/">Home</a>
      <ProfileClient />
    </main>
  );
}
