import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../RouteSwitch";
import Post from "./postComponents/Post";
import CreatePostBar from "./CreatePostBar";
import PopupForm from "../forms/PopupForm";

function MainContent() {
  const [showPopup, setShowPopup] = useState(false);
  const { posts, user } = useContext(UserContext);

  return (
    <div className="MainContent">
      <CreatePostBar setShowPopup={setShowPopup} />
      {showPopup ? <PopupForm setShowPopup={setShowPopup} /> : null}

      {/* Traverses the array in reverse order to display test data by time posted */}
      {posts
        ? posts.map((curPost) => {
            return <Post user={user} post={curPost} key={curPost._id} />;
          })
        : null}
    </div>
  );
}

export default MainContent;
