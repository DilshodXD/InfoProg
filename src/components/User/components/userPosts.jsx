import Post from "../../needful/post";
import "../userComponents.scss";

const user = {
  userImg:
    "https://avatars.githubusercontent.com/u/101493630?s=400&u=c933f26b960ac32c98a88c147b27ea77accb39a0&v=4",
  userName: "Dilshod Xojimuhammedov",
};
const posts = [
  {
    id: "das15",
    user: "xojimuhammedov",
    isPublic: false,
    postImg:
      "https://miro.medium.com/v2/resize:fit:640/format:webp/0*kGal_TgMZnDg3LCf.png",
    text: "Websites are now an essential tool for every business. And if you are a web developer and need to find new material or resources, then this is the place for you. As a developer, it is not easy to find a website that can provide all the resources and information that you need. This article will take you through 12 websites that you’ll love as a developer.",
    title: "12 Websites You’ll Love As A Developer",
    userImg:
      "https://avatars.githubusercontent.com/u/101493630?s=400&u=c933f26b960ac32c98a88c147b27ea77accb39a0&v=4",
    userName: "Dilshod Xojimuhammedov",
  },
  {
    id: "sd5a3",
    user: "Dilshod",
    isPublic: true,
    postImg:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*mCZjOe-l6BfariFv356WjA.png",
    text: "While useStateis a simple tool to use, many developers still make mistakes with it. During code reviews, I often see these mistakes made even by experienced people. I often see these mistakes made even by experienced people.",
    title: "5 React useState Mistakes That Will Get You Fired",
    userImg:
      "https://avatars.githubusercontent.com/u/101493630?s=400&u=c933f26b960ac32c98a88c147b27ea77accb39a0&v=4",
    userName: "Dilshod Xojimuhammedov",
  },
];

function UserPosts() {
  return (
    <>
      <div className="container-lg">
        <div className="user-posts d-flex column">
          {posts.map((post) => (
            <Post
              key={post.id}
              user={post.user}
              postPath={post.id}
              isPublic={post.isPublic}
              postImg={post.postImg}
              text={post.text}
              title={post.title}
              userImg={user.userImg}
              userName={user.userName}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default UserPosts;
