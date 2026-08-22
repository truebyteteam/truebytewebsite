import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import WhyChoose from "../components/WhyChoose";
import FeaturedProducts from "../components/FeaturedProducts";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <Hero />
        <Categories />
        <FeaturedProducts />
        <WhyChoose />
        <Testimonials />
        <About />
        <Gallery />
        <Footer />
      </main>
    </>
  );
}