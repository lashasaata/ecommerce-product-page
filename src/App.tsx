import "./App.css";
import data from "../data.json";
import { Routes, Route, useNavigate } from "react-router-dom";
import { createContext, useState } from "react";
import Navigate from "./components/Navigate";
import Collections from "./components/Collections";
import Product from "./components/Product";

export const Mycontext = createContext(null);

function App() {
  const [useData, setUsedata] = useState(data);
  const [cartList, setCartList] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="lg:flex lg:flex-col lg:px-[75px] xl:px-[165px]">
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
          <Route path="/" element={<Collections />} />
          <Route path="/:id" element={<Product />} />
          <Route />
          <Route />
          <Route />
          <Route />
        </Routes>
      </Mycontext.Provider>
    </div>
  );
}

export default App;
