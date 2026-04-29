import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Participants from "@/components/Participants";
import RouteMap from "@/components/RouteMap";
import Featured from "@/components/Featured";
import Infographic from "@/components/Infographic";
import Reports from "@/components/Reports";
import Gallery from "@/components/Gallery";
import Promo from "@/components/Promo";
import Register from "@/components/Register";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Participants />
      <RouteMap />
      <Featured />
      <Infographic />
      <Reports />
      <Gallery />
      <Promo />
      <Register />
      <Footer />
    </main>
  );
};

export default Index;