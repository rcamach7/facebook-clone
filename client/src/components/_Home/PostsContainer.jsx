import { useState, useContext } from "react";
import { UserContext } from "../../RouteSwitch";
import Post from "./_post/Post";
import StatusBar from "./StatusBar";
import CreateNewPostForm from "../_forms/CreateNewPostForm";

function PostsContainer() {
  const [showPopup, setShowPopup] = useState(false);
  const { posts, user } = useContext(UserContext);

  return (
    <div className="PostsContainer">
      <StatusBar setShowPopup={setShowPopup} />
      {showPopup ? <CreateNewPostForm setShowPopup={setShowPopup} /> : null}

      {/* Traverses the array in reverse order to display test data by time posted */}
      {posts
        ? posts.map((curPost) => {
            return <Post user={user} post={curPost} key={curPost._id} />;
          })
        : null}
    </div>
  );
}

export default PostsContainer;
