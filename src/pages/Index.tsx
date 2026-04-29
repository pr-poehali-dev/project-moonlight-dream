import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Promo from "@/components/Promo";
import Gallery from "@/components/Gallery";
import Register from "@/components/Register";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <Promo />
      <Gallery />
      <Register />
      <Footer />
    </main>
  );
};

export default Index;