import Link from "next/link";
export default function Home() {
  return (
    <div>
      Hello
      <Link href="/login">Login</Link>
      <Link href="/register">Register</Link>
    </div>
  );
}
