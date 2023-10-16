import { Routes, Route } from "react-router-dom";
import HomeNavbar from './components/HomeNavbar'
import HomePage from './components/HomePage'

function Home() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeNavbar />}>
          <Route index element={<HomePage />} />
          {/* <Route path="singup" element={<Blogs />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default Home;
