import "../styles/PostContainer.css";
import { v4 as uuidv4 } from "uuid";
import Post from "./Post";
import CreatePost from "./CreatePost";

function PostsContainer(props) {
  return (
    <div className="PostContainer">
      <CreatePost userInfo={props.userInfo} />

      {props.posts.map((curPost) => {
        return <Post post={curPost} key={uuidv4()} />;
      })}
    </div>
  );
}

export default PostsContainer;
