import "../styles/MainContent.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Post from "./Post";
import CreatePost from "./CreatePost";
import PopupForm from "./PopupForm";

function MainContent(props) {
  const [showPopup, setShowPopup] = useState(true);
  return (
    <div className="MainContent">
      <CreatePost userInfo={props.userInfo} setShowPopup={setShowPopup} />
      {showPopup ? <PopupForm userName={props.userInfo.username} /> : null}

      {props.posts.map((curPost) => {
        return <Post post={curPost} key={uuidv4()} />;
      })}
    </div>
  );
}

export default MainContent;
