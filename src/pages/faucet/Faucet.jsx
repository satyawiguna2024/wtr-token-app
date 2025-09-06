import Stepper from "../../components/VertikalStepper";

//?? Assets
import { IoIosSend } from "react-icons/io";
import { IoWaterSharp } from "react-icons/io5";
import { IoCube } from "react-icons/io5";
import { IoIosFlash } from "react-icons/io";
import { MdOutlineWaterfallChart } from "react-icons/md";
import { Eth } from "../../assets";

export default function Faucet() {

  return (
    <>
      {/* Hero Section */}
      <section>
        <div className="costume-container grid md:grid-cols-2 items-center">
          <div className="order-1 md:order-0">
            {/* text */}
            <span className="flex items-center mx-1 xs:mx-3 xl:mx-0">
              <IoWaterSharp className="size-7 lg:size-12 text-sky-500 -mt-2" />
              <h1 className="font-roboto font-bold text-md xs:text-xl lg:text-2xl xl:text-3xl">
                Faucet Ethereum Water (SEPOLIA)
              </h1>
            </span>
            <p className="ml-3 xs:mx-5 xl:mx-2 font-semibold font-inter text-slate-400 mt-1">
              <span className="font-bold text-white">WTR TOKEN</span> dolor sit
              amet consectetur adipisicing elit. Laudantium voluptates dolorum
              consectetur cupiditate quaerat praesentium qui similique quod
              perspiciatis nostrum!
            </p>
          </div>

          <div>
            {/* image */}
            <img src={Eth} alt="Ethereum image" className="object-cover" />
          </div>
        </div>
      </section>

      {/* Content 2 */}
      <section className="costume-container grid grid-cols-1 md:grid-cols-3 mt-5 items-start">
        <div className="col-span-2 border border-slate-800 rounded-xl m-3">
          {/* Stepper Form*/}
          <div className="bg-primary px-5 pt-8 rounded-t-xl">
            <Stepper icon={<IoCube />}>
              <div>
                <h3 className="font-roboto font-medium text-white text-lg mb-1">Drop in your wallet details</h3>
                <p className="text-slate-300 font-inter font-light text-md mb-2 opacity-80 max-w-[450px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore deleniti excepturi animi eligendi. Nostrum, cum.</p>
                <p className="text-slate-300 font-inter font-light text-md mb-2 opacity-80 max-w-[480px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque laudantium corporis necessitatibus doloremque culpa incidunt animi, ea odit nam. Sit?</p>
              </div>
              <hr className="my-5 text-white opacity-20" />
              <form>
                <div className="grid grid-cols-2 gap-4 mb-12">
                  <select className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="ethereum">Ethereum</option>
                  </select>

                  <select className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="wtr">WTR (Sepolia)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="walletAddress" className="font-roboto font-medium text-lg">Wallet Address</label>
                  <input 
                  id="walletAddress" 
                  type="text" 
                  maxLength={42}
                  placeholder="0xf2D15ee...46a0" 
                  className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <button type="submit" className="px-8 py-2 bg-blue-400 hover:bg-blue-500 cursor-pointer text-white font-medium font-roboto mt-10 rounded-lg flex items-center gap-x-1">
                  Send <i><IoIosSend size={25} /></i>
                </button>
              </form>
            </Stepper>
          </div>

          {/* Stepper lainnya */}
          <div className="px-5 pt-8">
            <Stepper icon={<IoIosFlash />}>
              <h2 className="text-lg font-semibold">Share a tweet</h2>
              <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolor quas reiciendis blanditiis optio quae. Voluptas reprehenderit mollitia, ea consequatur animi in culpa explicabo illo ipsum necessitatibus. Nam maiores expedita dolorem totam unde debitis in corrupti consequatur nesciunt aut quisquam repellat laborum, repudiandae amet nulla minus voluptates aspernatur soluta dignissimos?</p>
            </Stepper>
          </div>

          <div className="px-5 pt-8">
            <Stepper icon={<MdOutlineWaterfallChart />} line={true} isLast>
              <h2 className="text-lg font-semibold">Share a telegram</h2>
              <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sapiente qui optio aut adipisci veritatis sequi rerum voluptatum, repellendus at nesciunt explicabo porro. Assumenda facere architecto eaque. Minus, quasi dignissimos.</p>
            </Stepper>
          </div>
        </div>


        <div className="m-3 space-y-3">
          {[1,2,3,4].map((_, index ) => (
            <div key={index} className="border border-slate-800 rounded-lg p-5">
              <h3 className="font-roboto text-md font-semibold text-white mb-3 cursor-pointer hover:underline underline-offset-4">How to Create and Deploy an ERC20 Token (Smart Contract)</h3>
              <p className="font-inter text-sm font-light text-gray-400 opacity-80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, earum ut delectus impedit ratione repellat quos molestiae minus eos fugiat.
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
