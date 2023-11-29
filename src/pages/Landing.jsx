import Footer from "../components/footer";
import Hero from "../components/hero";
import MajorContributors from "../components/majorContributors";
import WhyReactode from "../components/whyReactode";

export default function Landing() {
  return (
    <div className="text-white flex flex-col gap-y-10 lg:gap-y-20 ">
      <div className="">
        <Hero />
      </div>
      <WhyReactode/>
      <MajorContributors/>
      <Footer/>
    </div>
  );
}
