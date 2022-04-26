import { useState, useContext } from "react";
import { UserContext } from "../../RouteSwitch";
import Post from "./_post/Post";
import StatusBar from "./StatusBar";
import CreateNewPostForm from "../_forms/CreateNewPostForm";

function PostsContainer() {
  const [showPopup, setShowPopup] = useState(false);
  const { posts, user, setPosts } = useContext(UserContext);

  return (
    <div className="PostsContainer">
      <StatusBar setShowPopup={setShowPopup} />
      {showPopup ? (
        <CreateNewPostForm setShowPopup={setShowPopup} setPosts={setPosts} />
      ) : null}

      {/* Traverses the array in reverse order to display test data by time posted */}
      {posts
        ? posts.map((curPost) => {
            return (
              <Post
                key={curPost._id}
                user={user}
                post={curPost}
                setPosts={setPosts}
              />
            );
          })
        : null}
    </div>
  );
}

export default PostsContainer;
