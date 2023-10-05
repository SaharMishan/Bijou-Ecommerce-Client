import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import ItemDetails from "./components/ItemDetalis/ItemsDetalis";
import Checkout from "./pages/Checkout/Checkout";
import Confirmation from "./pages/Confirmation/Confirmation";
import Navbar from "./components/Navbar/Navbar";
import CartMenu from "./components/CartMenu/CartMenu";
import Footer from "./components/Footer/Footer";
function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="item/:id" element={<ItemDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="checkout/success" element={<Confirmation />} />
        </Routes>
        <CartMenu />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
