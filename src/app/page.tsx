import Link from "next/link";
import Logo from "./logo";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center pt-20">
      <Logo/>
      <Link href = "/components" className="m-10 underline hover:text-blue-700">Go to Components Page</Link>
    </main>
  )
}
