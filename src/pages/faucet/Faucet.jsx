import { IoWaterSharp } from "react-icons/io5";
import { HiOutlineCube } from "react-icons/hi2";
import { Blob, Eth } from "../../assets/svg";

export default function Faucet() {
  return (
    <>
    {/* hero section */}
      <section>
        <div className="costume-container grid md:grid-cols-2 items-center">
          <div className="order-1 md:order-0">
            {/* text */}
            <span className="flex items-center mx-1 xs:mx-3 xl:mx-0">
              <IoWaterSharp className="size-7 text-sky-500 -mt-2" />
              <h1 className="font-roboto font-bold text-md xs:text-xl lg:text-2xl xl:text-3xl">Faucet Ethereum Water (SEPOLIA)</h1>
            </span>
            <p className="ml-3 xs:mx-5 xl:mx-2 font-semibold font-inter text-slate-400 mt-1"><span className="font-bold text-white">WTR TOKEN</span> dolor sit amet consectetur adipisicing elit. Laudantium voluptates dolorum consectetur cupiditate quaerat praesentium qui similique quod perspiciatis nostrum!</p>
          </div>

          <div>
            {/* image */}
            <img src={Eth} alt="Ethereum image" className="object-cover" />
          </div>
        </div>
      </section>


      
    </>
  )
}
