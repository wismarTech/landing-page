import Footer from "@/src/ui/reuseable/footer";
import ContactForm from "./form";
import ContactHero from "./hero";
import Navbar from "@/src/ui/reuseable/navbar";

export default function ContactIndex() {
  return (
    <div>
      <Navbar />
      <ContactHero />
      <ContactForm />
      <Footer  />
    </div>
  );
}
