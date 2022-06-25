import { useState } from "react";
import Post from "./Post/Post";
import StatusBar from "./StatusBar";
import { CreateNewPostForm } from "../forms/";
import { useSelector } from "react-redux";

function PostsContainer() {
  const [showPopup, setShowPopup] = useState(false);
  const user = useSelector((state) => state.user.value);
  const posts = useSelector((state) => state.posts.value);

  return (
    <div className="PostsContainer">
      <StatusBar setShowPopup={setShowPopup} />
      {showPopup && <CreateNewPostForm setShowPopup={setShowPopup} />}

      {/* Traverses the array in reverse order to display test data by time posted */}
      {posts &&
        posts.map((curPost) => {
          return <Post key={curPost._id} user={user} post={curPost} />;
        })}
    </div>
  );
}

export default PostsContainer;
