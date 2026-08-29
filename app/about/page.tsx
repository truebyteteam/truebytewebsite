import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import About from "../../components/About";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24 bg-green-50 min-h-screen">
        <About />
      </main>

      <Footer />
    </>
  );
}