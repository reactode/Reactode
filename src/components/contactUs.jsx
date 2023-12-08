export default function ContactUs () {
    return (
      <div className="flex flex-col justify-center items-center gap-y-4  ">
        <div className="flex justify-center items-center gap-x-2 w-[80%] ">
          <h2 className="font-[Inter] text-2xl md:text-4xl">Contact Us </h2>
          <img className="w-[10%] sm:w-[5%]" src="/hero/whyR.svg" alt="" />
        </div>
       <div>
       <p className="text-xs sm:text-sm md:text-lg md:px-40 max-sm:text-justify text-center">Our dedicated team is here to assist you with any questions, concerns, or suggestions you may have. We look forward to hearing from you and providing the support you need.</p> 
       </div>
       <div>
       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Contact Us</button>
       </div>
      </div>
    )
}