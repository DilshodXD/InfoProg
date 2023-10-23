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

function upAnimate(index) {
  let up = document.getElementById(`up${index}`);
  let upButton = document.getElementById(`up${index}button`);
  up.style.transition = "500ms";

  setTimeout(() => {
    up.style.top = "-10px";
    up.style.color = "#38b000";
    upButton.style.borderColor = "#38b000";
  }, 200);

  setTimeout(() => {
    up.style.transition = "none";
    up.style.top = "50px";
    up.style.fontWeight = 700;
  }, 450);

  setTimeout(() => {
    up.style.transition = "500ms";
    up.style.top = "10px";
  }, 600);

  setTimeout(() => {
    up.style.transition = "300ms";
    up.style.top = "14px";
  }, 1100);
}

function downAnimate(index) {
  let down = document.getElementById(`down${index}`);
  let downButton = document.getElementById(`down${index}button`);
  down.style.transition = "500ms";

  setTimeout(() => {
    down.style.top = "35px";
    down.style.color = "#f02d3a";
    downButton.style.borderColor = "#f02d3a";
  }, 200);

  setTimeout(() => {
    down.style.transition = "none";
    down.style.top = "-40px";
    down.style.fontWeight = 700;
  }, 450);

  setTimeout(() => {
    down.style.transition = "500ms";
    down.style.top = "18px";
  }, 600);

  setTimeout(() => {
    down.style.top = "14px";
  }, 1100);
}

function Article() {
  return (
    <section className="article bg-black">
      <div className="container-xl">
        <h3 className="article-title tx-white">Maqolalar</h3>
        <div className="article-fil d-flex aic">
          {tags.map((e, index) => (
            <button
              key={index}
              className="article-fil-tag bg-black rad-10 tx-white"
            >
              {e}
            </button>
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
                  <button
                    onClick={() => upAnimate(index + 1)}
                    id={"up" + (index + 1) + "button"}
                    className="up reaction d-flex aic jcsb bg-black"
                  >
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
                  </button>
                  <button
                    onClick={() => downAnimate(index + 1)}
                    id={"down" + (index + 1) + "button"}
                    className="down reaction d-flex aic jcsb bg-black"
                  >
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
                  </button>
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
