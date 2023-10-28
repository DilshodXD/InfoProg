import Post from "../../needful/post";
import "../userComponents.scss";

function UserPosts() {
  return (
    <>
      <div className="container-lg">
        <div className="user-posts d-flex column">
          <Post
            userImg={"https://avatars.githubusercontent.com/u/91214940?v=4"}
            isPublic={false}
            postImg={
              "https://miro.medium.com/v2/resize:fit:640/format:webp/0*kGal_TgMZnDg3LCf.png"
            }
            text={
              "Websites are now an essential tool for every business. And if you are a web developer and need to find new material or resources, then this is the place for you. As a developer, it is not easy to find a website that can provide all the resources and information that you need. This article will take you through 12 websites that you’ll love as a developer."
            }
            title={"12 Websites You’ll Love As A Developer"}
            userName={"Uwussimo Robinson"}
          />
          <Post
            userImg={
              "https://avatars.githubusercontent.com/u/101493630?s=400&u=c933f26b960ac32c98a88c147b27ea77accb39a0&v=4"
            }
            isPublic={true}
            postImg={
              "https://miro.medium.com/v2/resize:fit:720/format:webp/1*mCZjOe-l6BfariFv356WjA.png"
            }
            text={
              "While useStateis a simple tool to use, many developers still make mistakes with it. During code reviews, I often see these mistakes made even by experienced people. I often see these mistakes made even by experienced people."
            }
            title={"5 React useState Mistakes That Will Get You Fired"}
            userName={"Dilshod Xojimuhammedov"}
          />
        </div>
      </div>
    </>
  );
}

export default UserPosts;
