import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Participants from "@/components/Participants";
import Featured from "@/components/Featured";
import Reports from "@/components/Reports";
import Promo from "@/components/Promo";
import Gallery from "@/components/Gallery";
import Register from "@/components/Register";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Participants />
      <Featured />
      <Reports />
      <Gallery />
      <Promo />
      <Register />
      <Footer />
    </main>
  );
};

export default Index;