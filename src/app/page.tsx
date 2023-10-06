import Link from "next/link";
import Logo from "./logo";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center mx-auto pt-20">
      <Logo/>
      <Link href = "/components" className="m-10 underline">Go to Components Page</Link>
    </main>
  )
}
