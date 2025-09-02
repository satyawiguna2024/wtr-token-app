import { Routes, Route } from "react-router";
import {Home, Faucet} from "./pages/index";

export default function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <h1 className="text-white">Navbar</h1>
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faucet" element={<Faucet />} />
          </Routes>
        </div>
        <h1 className="text-white">Footer</h1>
      </div>
    </>
  );
}
