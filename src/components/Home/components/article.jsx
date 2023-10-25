import DownButton from "../../needful/downButton";
import TopButtun from "../../needful/upButton";
import HoverButton from "../../needful/hoverButton";

const tags = ["all", "JavaScript", "React", "Angular", "TypeScript"];
const people = [
  {
    id: 0, // Used in JSX as a key
    name: "Creola",
    tags: ["JavaScript", "React"],
    title: 'JavaScriptda "Destructuring assignment"',
    text: "Bugungi maqolamizning mavzusi ko'rib turganingizdek \"Destructuring assignment\" bo'ladi. Nomi notanish bo'lsada ko'pchiligimiz ishlatib ko'rgan mavzulardan biri. Bugungi maqolamizning mavzusi ko'rib turganingizdek \"Destructuring assignment\" bo'ladi. Nomi notanish bo'lsada ko'pchiligimiz ishlatib ko'rgan mavzulardan biri.",
    imageId: "https://i.imgur.com/MK3eW3As.jpg",
  },
  {
    id: 1, // Used in JSX as a key
    name: "Mario",
    tags: ["TypeScript"],
    title: "Typescriptda utility tiplar",
    text: "Typescript bilan ishlayotganizimda yordamchi tiplar bizga qo'l kelib qolishi mumkin. Bu maqolada ba'zi bir ko'p ishlatiladigan yordamchi tiplar haqida gaplashamiz.",
    imageId: "https://i.imgur.com/mynHUSas.jpg",
  },
  {
    id: 2, // Used in JSX as a key
    name: "Mohammad",
    tags: ["React"],
    title: "useLayoutEffect hooki",
    text: "React kutubxonasi bilan keluvchi bu hook kamdan-kam holatlarda ishlatiladi. Bu hook haqida birinchi marta eshitayotgan bo'lsangiz ajabmas.",
    imageId: "https://i.imgur.com/bE7W1jis.jpg",
  },
  {
    id: 3, // Used in JSX as a key
    name: "Percy",
    profession: "chemist",
    tags: ["Next"],
    title: "NextJS autentifikatsiya (auth)",
    text: "NextJS autentifikatsiya - bu shunchaki localStorage'ga tokenni saqlab qo'yish emas. NextJS server bo'lganligi sababli unda window abyekti bo'lmaydi. Authentifikatsiya",
    imageId: "https://i.imgur.com/IOjWm71s.jpg",
  },
];

function Article() {
  return (
    <section className="article bg-black">
      <div className="container-xl">
        <h3 className="article-title tx-white">Maqolalar</h3>
        <div className="article-fil d-flex aic">
          {tags.map((e, index) => (
            <HoverButton
              color={"#fff"}
              fontSize={14}
              fontWeight={700}
              padding={[4, 14]}
              key={index}
            >
              {e}
            </HoverButton>
          ))}
        </div>
        <ul className="article-boxs d-flex">
          {people.map((e, index) => (
            <li key={e.id} className="article-box bor-white rad-20">
              <div className="article-box-top d-flex jcsb">
                <p className="article-box-title tx-white">{e.title}</p>
                <div className="article-box-tags d-flex aic">
                  {e.tags.map((i, index) => (
                    <span
                      key={index}
                      className="article-box-tag tx-white bor-white rad-10"
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </div>
              <p className="article-box-text tx-white">{e.text}</p>
              <div className="article-box-bottom d-flex aic">
                <img className="article-box-img bor-white" src={e.imageId} />
                <p className="article-box-name tx-white">{e.name}</p>
                <hr style={{ height: "28px", opacity: ".5" }} />
                <div className="article-box-reaction d-flex aic">
                  <TopButtun index={index}>
                    <i
                      id={"up" + (index + 1)}
                      className="reaction-font fa-thin fa-lg fa-up"
                      style={{ color: "#ffffff" }}
                    ></i>
                    <p
                      className="tx-white"
                      style={{
                        fontWeight: 400,
                        fontSize: 12,
                        marginLeft: "22px",
                      }}
                    >
                      153
                    </p>
                  </TopButtun>

                  <DownButton index={index}>
                    <i
                      id={"down" + (index + 1)}
                      className="reaction-font fa-thin fa-lg fa-down"
                      style={{ color: "#ffffff" }}
                    ></i>
                    <p
                      className="tx-white"
                      style={{
                        fontWeight: 400,
                        fontSize: 12,
                        marginLeft: "22px",
                      }}
                    ></p>
                  </DownButton>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Article;
