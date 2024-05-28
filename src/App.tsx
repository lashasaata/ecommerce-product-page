import "./App.css";
import data from "../data.json";
import { Routes, Route, useNavigate } from "react-router-dom";
import { createContext } from "react";
import Navigate from "./components/Navigate";
import Collections from "./components/Collections";
import Product from "./components/Product";

const Mycontext = createContext(null);

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <Mycontext.Provider
        value={{
          data,
          navigate,
        }}
      >
        <Navigate />
        <Routes>
          <Route path="/" element={<Collections />} />
          <Route path="/:id/product" element={<Product />} />
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
