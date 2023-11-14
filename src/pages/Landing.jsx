import Footer from "../components/footer";
import Hero from "../components/hero";
import MajorContributors from "../components/majorContributors";

export default function Landing() {
  return (
    <div className="text-white sm:hidden">
      <div className="h-[100vh]">
        <Hero />
      </div>
      <div className="flex flex-col justify-center items-center gap-y-4  ">
        <div className="flex justify-center items-center gap-x-2 w-[80%] ">
          <h2 className="font-[Inter] text-2xl">Why Reactode</h2>
          <img className="w-[10%]" src="/hero/whyR.svg" alt="" />
        </div>
        <p className="text-xs text-justify">
          Choosing a team like Reactode, which collaboratively handles both
          frontend and backend development, offers several advantages. Firstly,
          it promotes seamless communication and collaboration between
          developers, as they are closely aligned in their work. This integrated
          approach also streamlines the development process, reducing
          bottlenecks and ensuring quicker delivery of features and updates.
          Moreover, Reactode's team members can have a more holistic
          understanding of the entire application, leading to better
          optimization and improved user experiences. Overall, selecting a team
          that excels in both frontend and backend development, such as
          Reactode, can lead to more efficient, cohesive, and high-quality
          software solutions.
        </p>
      </div>
      <MajorContributors/>
      <Footer/>
    </div>
  );
}
