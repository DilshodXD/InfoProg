import { useState } from "react";
import HoverButton from "../../needful/hoverButton";
import Post from "../../needful/post";

const tags = ["all", "JavaScript", "React", "Angular", "TypeScript"];
const people = [
  {
    userImg:
      "https://avatars.githubusercontent.com/u/101493630?s=400&u=c933f26b960ac32c98a88c147b27ea77accb39a0&v=4",
    userName: "Dilshod Xojimuhammedov",
    id: "das15",
    user: "xojimuhammedov",
    isPublic: true,
    postImg:
      "https://miro.medium.com/v2/resize:fit:640/format:webp/0*kGal_TgMZnDg3LCf.png",
    text: "Websites are now an essential tool for every business. And if you are a web developer and need to find new material or resources, then this is the place for you. As a developer, it is not easy to find a website that can provide all the resources and information that you need. This article will take you through 12 websites that you’ll love as a developer.",
    title: "12 Websites You’ll Love As A Developer",
    likes: 53,
  },
  {
    userImg: "https://avatars.githubusercontent.com/u/12645328?v=4",
    userName: "Marc Lou",
    id: "sd5a3",
    user: "Mark",
    isPublic: false,
    postImg:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*mCZjOe-l6BfariFv356WjA.png",
    text: "While useStateis a simple tool to use, many developers still make mistakes with it. During code reviews, I often see these mistakes made even by experienced people. I often see these mistakes made even by experienced people.",
    title: "5 React useState Mistakes That Will Get You Fired",
    likes: 12,
  },
  {
    userImg: "https://miro.medium.com/v2/resize:fill:176:176/1*_wgjrVvTLyrxSSD1pBa4Ew.jpeg",
    userName: "Harendra Kumar",
    id: "sd3a3",
    user: "harendra21",
    isPublic: true,
    postImg:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*nX3dW9vnOTDLGjlfRZShtQ.png",
    text: "React.js has revolutionized front-end development by providing a powerful and efficient way to build user interfaces. However, as your React application grows in complexity, maintaining clean, readable, and maintainable code becomes crucial. In this guide, we’ll explore best practices for writing clean React.js code that not only works but is also easy to understand and maintain.",
    title: "React Js Clean Code Guide",
    likes: 27,
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
          {people.map((post) => (
            <li>
              <Post
                key={post.id}
                user={post.user}
                postPath={post.id}
                isPublic={post.isPublic}
                postImg={post.postImg}
                text={post.text}
                title={post.title}
                userImg={post.userImg}
                userName={post.userName}
                like={post.likes}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Article;
