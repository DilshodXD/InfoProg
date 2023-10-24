import HomeSearch from "./components/search";
import HomeLink from "./components/homeLinks";
import Article from "./components/article";
import TopUsers from "./components/topUsers";

function HomePage() {
  return (
    <>
      <HomeSearch />
      <HomeLink />
      <Article />
      <TopUsers/>
    </>
  );
}

export default HomePage;
