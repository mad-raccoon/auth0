import { getSession } from "@auth0/nextjs-auth0";

export default async function ProfileServer() {
  const { user }: any = await getSession();

  return (
    user && (
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
}
