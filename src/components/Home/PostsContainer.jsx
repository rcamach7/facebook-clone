import { useState } from "react";
import Post from "./Post/Post";
import StatusBar from "./StatusBar";
import { CreateNewPostForm } from "../forms/";
import { useSelector } from "react-redux";
import { FullPageLoading } from "../Loading";
import { useEffect } from "react";

function PostsContainer() {
  const user = useSelector((state) => state.user.value);
  const posts = useSelector((state) => state.posts.value);

  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user && posts) {
      setLoading(false);
    }
  }, [user, posts]);

  return (
    <div className="PostsContainer">
      <StatusBar setShowPopup={setShowPopup} />
      {showPopup && <CreateNewPostForm setShowPopup={setShowPopup} />}

      {/* Traverses the array in reverse order to display test data by time posted */}
      {posts &&
        posts.map((curPost) => {
          return <Post key={curPost._id} user={user} post={curPost} />;
        })}

      {/* Trigger full page reload UI while data is still being fetched. */}
      {loading && <FullPageLoading />}
    </div>
  );
}

export default PostsContainer;
