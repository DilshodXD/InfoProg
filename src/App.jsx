import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.scss";

import { Counter } from "./components/Home/counter";
import HomeNavbar from "./components/Home/components/HomeNavbar";
import HomePage from "./components/Home/HomePage";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Route index (home) page */}
          <Route path="/" element={<HomeNavbar />}>
            <Route index element={<HomePage />} />
            <Route path="counter" element={<Counter />} />
          </Route>

          {/* Route singup / singin page */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
