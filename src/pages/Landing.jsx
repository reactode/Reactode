import Footer from "../components/footer";
import Hero from "../components/hero";
import MajorContributors from "../components/majorContributors";
import WhyReactode from "../components/whyReactode";
import ContactUs from "../components/contactus";

export default function Landing() {
  return (
    <div className="text-white flex flex-col gap-y-10 lg:gap-y-20 ">
      <div className="">
        <Hero />
      </div>
      <WhyReactode/>
      <MajorContributors/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}
