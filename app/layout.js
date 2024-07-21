import Footer from "@/components/Footer";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import { auth } from "@/auth";
import { signOut } from "@/auth";

export const metadata = {
  title: "Grow Your Garden",
};

export default async function RootLayout({ children }) {
  const session = await auth();
  async function signOutProps() {
    "use server";
    await signOut();
  }

  return (
    <html lang="en">
      <body>
        <Navbar
          backgroundColor="bg-deep-green"
          session={session}
          signOutProps={signOutProps}
        ></Navbar>
        <section className="bg-deep-green">{children}</section>
        <Footer backgroundColor="bg-deep-green"></Footer>
      </body>
    </html>
  );
}
