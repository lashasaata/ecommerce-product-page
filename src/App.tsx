import "./App.css";
import data from "../data.json";
import { Routes, Route, useNavigate } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import Navigate from "./components/Navigate";
import Collections from "./components/Collections";
import Product from "./components/Product";

export const Mycontext = createContext(null);

function App() {
  const [useData, setUsedata] = useState(() => {
    const savedData = localStorage.getItem("data");
    try {
      return savedData ? JSON.parse(savedData) : data;
    } catch (error) {
      console.error("Error parsing data from localStorage:", error);
      return data; // Fallback to default data if parsing fails
    }
  });

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(useData));
  }, [useData]);

  const [cartList, setCartList] = useState(() => {
    return localStorage.cartList ? JSON.parse(localStorage.cartList) : false;
  });
  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(cartList));
  }, [cartList]);
  const navigate = useNavigate();

  return (
    <div className="lg:flex lg:flex-col lg:gap-[90px] lg:px-[75px] xl:px-[165px]">
      <Mycontext.Provider
        value={{
          useData,
          setUsedata,
          navigate,
          cartList,
          setCartList,
        }}
      >
        <Navigate />
        <Routes>
          <Route path="/" element={<Collections value={"Collections"} />} />
          <Route path="/:id" element={<Product />} />
          <Route path="/Men" element={<Collections value={"Men"} />} />
          <Route path="/Women" element={<Collections value={"Women"} />} />
          <Route />
          <Route />
        </Routes>
      </Mycontext.Provider>
    </div>
  );
}

export default App;
