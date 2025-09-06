import Stepper from "../../components/VertikalStepper";
import { cardList } from "../../hooks/CardList";

//?? Assets
import { IoIosSend } from "react-icons/io";
import { IoWaterSharp } from "react-icons/io5";
import { IoCube } from "react-icons/io5";
import { IoIosFlash } from "react-icons/io";
import { MdOutlineWaterfallChart } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Eth } from "../../assets";
import { Link } from "react-router";

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
              <span className="font-bold text-white">WTR TOKEN</span> A test
              token flowing on the Sepolia Testnet, designed for developers
              hungry for innovation. Grab a WTR drop and start testing your
              smart contracts or DApps with ease.
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
                <h3 className="font-roboto font-medium text-white text-lg mb-1">
                  Drop in your wallet details
                </h3>
                <p className="text-slate-300 font-inter font-light text-md mb-2 opacity-80 max-w-[450px]">
                  This token is only for testing on the Sepolia Testnet, so you
                  can be creative without worrying about losing your real
                  assets.
                </p>
                <p className="text-slate-300 font-inter font-light text-md mb-2 opacity-80 max-w-[480px]">
                  Use this faucet to get free WTR Tokens (Sepolia). Simply enter
                  your wallet address and the tokens will be sent immediately to
                  support smart contract testing and DApps. 🚀
                </p>
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
                  <label
                    htmlFor="walletAddress"
                    className="font-roboto font-medium text-lg"
                  >
                    Wallet Address
                  </label>
                  <input
                    id="walletAddress"
                    type="text"
                    maxLength={42}
                    placeholder="0xf2D15ee...46a0"
                    className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="px-8 py-2 bg-blue-400 hover:bg-blue-500 cursor-pointer text-white font-medium font-roboto mt-10 rounded-lg flex items-center gap-x-1"
                >
                  Send{" "}
                  <i>
                    <IoIosSend size={25} />
                  </i>
                </button>
              </form>
            </Stepper>
          </div>

          {/* Stepper lainnya */}
          <div className="px-5 pt-8">
            <Stepper icon={<IoIosFlash />}>
              <h2 className="text-xl font-roboto font-semibold text-slate-500">Share a tweet to getting 1x bonus! </h2>
            </Stepper>
          </div>

          <div className="px-5 pt-8">
            <Stepper icon={<MdOutlineWaterfallChart />} line={true} isLast>
              <h2 className="text-xl font-roboto font-semibold text-slate-500">Receive drip</h2>
            </Stepper>
          </div>
        </div>

        <div className="m-3 space-y-3">
          {cardList.map((i, index) => (
            <div key={index} className="border border-slate-800 rounded-lg p-5">
              <h3 className="font-roboto text-md font-semibold text-white mb-3 cursor-pointer hover:underline underline-offset-4">
                {i.title}
              </h3>
              <p className="font-inter text-sm font-light text-gray-400 opacity-80">
                {i.description}
              </p>

              <Link to={i.url} className="flex items-center mt-5 font-inter text-sm text-blue-400 hover:underline">Explore this guide  <MdKeyboardArrowRight size={25} /></Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
