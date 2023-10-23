import HomeSearch from "./components/search";
import HomeLink from "./components/homeLinks";
import Article from "./components/article";
import { Fragment } from "react";

function HomePage() {
  return (
    <>
      <HomeSearch />
      <HomeLink />
      <Article />
    </>
  );
}

export default HomePage;
