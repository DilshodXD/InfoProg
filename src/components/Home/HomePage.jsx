import HomeSearch from "./components/search";
import HomeLink from "./components/homeLinks";
import Article from "./components/article";
import TopUsers from "./components/topUsers";
import Footer from "./components/footer";

function HomePage() {
  return (
    <>
      <HomeSearch />
      <HomeLink />
      <Article />
      <TopUsers/>
      <Footer/>
    </>
  );
}

export default HomePage;
