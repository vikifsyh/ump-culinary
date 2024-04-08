import Navbar from "../component/Navbar";
import NextTopLoader from "nextjs-toploader";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NextTopLoader />
      <Navbar />
      {children}
    </>
  );
}
