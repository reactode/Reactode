
export default function Footer() {
  return (
    <div>
      <hr className="text-white mt-12" />
      <div className="flex flex-col justify-center gap-y-2 items-center mt-6">
        <div className="flex gap-x-8">
        <a href="/about">About Us</a>
        <a href="/Contact">Contact Us</a>
        </div>
        <h4>&copy;2023 Reactode,
         All rights Reserved
        </h4>
      </div>
    </div>
  )
}
