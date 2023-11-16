import Navbar from "./navbar";

export default function Hero() {
  return (
    <div className="md:h-[100vh] flex justify-center items-center ">
      <div className="lg:h-[90vh] w-[95vw] bg-[#121831] md:w-[90vw] rounded-2xl md:rounded-3xl p-2">
        <Navbar />
        <div className="text-white font-[Inter] flex  md:flex-row-reverse justify-center gap-x-[20%] items-center gap-y-8  flex-col mt-4 md:p-4">
          <img className="max-sm:w-[50vw] w-[25%]  " src="/hero1.svg" alt="" />
          <div className="flex basis-1/2 flex-col justify-center items-center gap-y-8 md:gap-y-16">
            <div className="flex flex-col gay-y-4">
            <h2 className="font-semibold text-xl md:text-3xl">Welcome to REACTODE !!</h2>
            <p className="text-sm md:text-lg font-normal text-justify sm:mt-4">
              Our team is a symphony of creative minds harmonizing to transform
              concepts into captivating digital experiences. We embrace
              challenges as opportunities and thrive on collaborative ingenuity.
              With a tapestry of diverse skills, we weave intricate designs with
              lines of code, crafting the future pixel by pixel. Together, we
              sculpt imagination into functional artistry, where each keystroke
              resonates with the shared heartbeat of innovation
            </p>
            </div>
            <div className="flex justify-center items-center gap-x-6 text-sm md:text-xl">
            <button
              className="flex justify-center items-center gap-x-1 p-2"
              style={{
                borderRadius: "0.625rem",
                border: "1px solid rgba(0, 0, 0, 0.50)",
                background:
                  "linear-gradient(180deg, rgba(254, 200, 241, 0.90) -22.92%, rgba(254, 200, 241, 0.00) 26.73%), radial-gradient(137.13% 253.39% at 76.68% 66.67%, #602EA6 0%, #C977D6 100%)",
                backgroundBlendMode: "overlay, normal",
                boxShadow:
                  "0px 30px 30px 0px rgba(0, 0, 0, 0.40), 0px 0px 5px 0px #FFACE4 inset, 0px -1px 8px 0px #9375B6 inset",
              }}
            >
              <img src="/Vector.svg" alt="" />
              <a href="">Explore More </a>
            </button>
            <button
              className="flex justify-center items-center gap-x-1 p-2"
              style={{
                borderRadius: "0.625rem",
                border: "1px solid rgba(0, 0, 0, 0.50)",
                background:
                  "linear-gradient(180deg, rgba(254, 200, 241, 0.90) -22.92%, rgba(254, 200, 241, 0.00) 26.73%), radial-gradient(137.13% 253.39% at 76.68% 66.67%, #602EA6 0%, #C977D6 100%)",
                backgroundBlendMode: "overlay, normal",
                boxShadow:
                  "0px 30px 30px 0px rgba(0, 0, 0, 0.40), 0px 0px 5px 0px #FFACE4 inset, 0px -1px 8px 0px #9375B6 inset",
              }}
            >
              <img src="/Vector.svg" alt="" />
              <a href="">New Project</a>
            </button>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
