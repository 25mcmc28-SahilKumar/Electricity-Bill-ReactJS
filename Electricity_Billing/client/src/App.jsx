import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Customers from "./pages/Customers";
import GenerateBill from "./pages/GenerateBill";
import PayBill from "./pages/PayBill";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/customers" element={<Customers />} />

        <Route
          path="/generate-bill"
          element={<GenerateBill />}
        />

        <Route
          path="/pay-bill"
          element={<PayBill />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;