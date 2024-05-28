import "./App.css";
import data from "../data.json";
import { Routes, Route, useNavigate } from "react-router-dom";
import { createContext } from "react";
import Navigate from "./components/Navigate";
import Collections from "./components/Collections";
import Product from "./components/Product";

export const Mycontext = createContext(null);

function App() {
  const useData: Tdata = data;
  const navigate = useNavigate();
  console.log(data);
  return (
    <div>
      <Mycontext.Provider
        value={{
          useData,
          navigate,
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
