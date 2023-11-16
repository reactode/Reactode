const data = [
  {
    id: 1,
    name: "Shivam",
    img: "/majorContri/profile.png",
  },
  {
    id: 2,
    name: "Shivam",
    img: "/majorContri/profile.png",
  },
  {
    id: 3,
    name: "Shivam",
    img: "/majorContri/profile.png",
  },
  {
    id: 4,
    name: "Shivam",
    img: "/majorContri/profile.png",
  },
];

export default function MajorContributors() {
  return (
    <div className="mt-10">
    <div className="flex justify-center items-center gap-x-2 mb-44 ">
    <h2 className="font-[Inter] text-center text-2xl md:text-4xl">Major Contributors</h2>
    <img className="w-[10%] sm:w-[5%]" src="/hero/whyR.svg" alt="" />
  </div>
    <div className="flex flex-col md:flex-row gap-y-52 gap-x-10 mt-20">
      
      {data.map((item) => (
        <div
          className=" flex flex-col basis-1/3 relative  justify-center items-center"
          key={item.id}
          style={{
            
          }}
        >
          <img className="w-[80%] absolute bottom-5" src={item.img} alt={item.name}  />
          <div className="w-full h-[10vh]  flex justify-center items-center" style={{borderRadius: "1.25rem",
            border: "1px solid rgba(255, 255, 255, 0.00)",
            background: "linear-gradient(180deg, rgba(49, 58, 91, 0.00) -1.11%, rgba(49, 58, 91, 0.44) 62.79%, #313A5B 99.56%)",
            backdropFilter: "blur(10px)"}}>
          <h3 className=" z-20">{item.name}</h3>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
