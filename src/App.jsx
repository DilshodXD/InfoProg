import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home'
import './index.scss'

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            {/* <Route path="singup" element={<Blogs />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
