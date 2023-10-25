import ProfileClient from "../ProfileClient";

export default function Home() {
  return (
    <main>
      <a href="/api/auth/login">Login</a>
      <a href="/api/auth/logout">Logout</a>
      <a href="/">Home</a>
      <ProfileClient />
    </main>
  );
}
