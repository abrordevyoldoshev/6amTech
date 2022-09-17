import React from "react";

import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Documentation from "./view/viewDoc/Documentation";
import Mart from "./view/6amMart/Mart";
import Cash from "./view/6Cash/Cash";
import Food from "./view/eFood/Food";
import GroFresh from "./view/groFresh/GroFresh";
import HexaCom from "./view/hexacom/HexaCom";
import StackFood from "./view/stackFood/StackFood";
import Valley from "./view/6Valley/Valley";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Documentation />} />
        <Route path="mart" element={<Mart />} />
        <Route path="cash" element={<Cash />} />
        <Route path="food" element={<Food />} />
        <Route path="goroFresh" element={<GroFresh />} />
        <Route path="hexacom" element={<HexaCom />} />
        <Route path="stack" element={<StackFood />} />
        <Route path="valley" element={<Valley />} />
      </Route>
    </Routes>

  );
}

export default App;
