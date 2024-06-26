import Footer from "@/components/Footer";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Grow Your Garden",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar backgroundColor="bg-deep-green"></Navbar>
        <section className="bg-deep-green">
          {children}
        </section>
        <Footer backgroundColor="bg-deep-green"></Footer>
      </body>
    </html>
  );
}
