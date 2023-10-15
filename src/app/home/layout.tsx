import Navbar from "../components/navbar-component";

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="">
      <Navbar />
      <div className="">{children}</div>
    </section>
  );
}
