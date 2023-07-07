import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Store from "./pages/Store";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import CartProvider from "./CartContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <CartProvider children={"Children"}>
      <div className="p-16">
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route index element={<Store />}></Route>
            <Route index path="success" element={<Success />}></Route>
            <Route path="cancel" element={<Cancel />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      <Toaster />
    </CartProvider>
  );
}

export default App;
