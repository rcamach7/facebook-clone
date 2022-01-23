import "../styles/PostContainer.css";
import Post from "./Post";

function PostContainer(props) {
  return (
    <div className="PostContainer">
      {props.posts.map((curPost) => {
        return <Post post={curPost} />;
      })}
    </div>
  );
}

export default PostContainer;
