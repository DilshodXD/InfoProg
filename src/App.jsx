import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.scss";

import { Counter } from "./components/Home/counter";
import Home from "./components/Home/Home";
import HomePage from "./components/Home/HomePage";
import Youtube from "./components/Home/Youtube";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Route index (home) page */}
          <Route path="/" element={<Home />}>
            <Route index element={<HomePage />} />
            <Route path="videos" element={<Youtube />} />
            <Route path="counter" element={<Counter />} />
          </Route>

          {/* Route singup / singin page */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
