import { Routes, Route } from "react-router";
import Faucet from "./pages/faucet/Faucet";
import NotFound from "./components/NotFound";
import MainLayout from "./MainLayout";

export default function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={
            <MainLayout>
              <Faucet />
            </MainLayout>
          } />

          {/* kalo misalnya ada route lain sama */}
          {/* <Route path="/" element={
            <MainLayout>
              <Contact />
            </MainLayout>
          } /> */}

          {/* not found pages */}
          <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  );
}
