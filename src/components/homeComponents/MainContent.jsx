import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Post from "./postComponents/Post";
import CreatePostBar from "./CreatePostBar";
import PopupForm from "../forms/PopupForm";

function MainContent(props) {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="MainContent">
      <CreatePostBar
        userInfo={props.userInfo}
        profilePicture={props.profilePicture}
        setShowPopup={setShowPopup}
      />
      {showPopup ? (
        <PopupForm
          setShowPopup={setShowPopup}
          userInfo={props.userInfo}
          profilePicture={props.profilePicture}
          handleNewPost={props.handleNewPost}
        />
      ) : null}

      {/* Traverses the array in reverse order to display test data by time posted */}
      {props.posts
        .slice(0)
        .reverse()
        .map((curPost) => {
          return (
            <Post
              post={curPost}
              key={uuidv4()}
              handleAddCommentToPost={props.handleAddCommentToPost}
              icon={props.profilePicture}
              handleAddCommentLike={props.handleAddCommentLike}
              handlePostLike={props.handlePostLike}
              profilePicture={props.profilePicture}
            />
          );
        })}
    </div>
  );
}

export default MainContent;
