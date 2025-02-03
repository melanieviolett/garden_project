import Footer from "@/components/Footer";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import { auth } from "@/auth";
import { signOut } from "@/auth";
import prisma from "@/lib/db";

export const metadata = {
  title: "Grow Your Garden",
};

export default async function RootLayout({ children }) {
  const session = await auth();
  async function signOutProps() {
    "use server";
    await signOut();
  }

  let isRegistered = false;

  if (session?.user?.email) {
    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    isRegistered = !!currentUser?.registered;
  }

  return (
    <html lang="en">
      <body>
        <Navbar
          backgroundColor="bg-deep-green"
          session={session}
          signOutProps={signOutProps}
          isRegistered={isRegistered}
        ></Navbar>
        <section className="bg-deep-green" session={session}>
          {children}
        </section>
        <Footer backgroundColor="bg-deep-green"></Footer>
      </body>
    </html>
  );
}
