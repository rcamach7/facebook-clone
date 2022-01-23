import "../styles/PostContainer.css";
import "../styles/CreatePost.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhotoVideo, faLaughBeam } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import Post from "./Post";

function PostContainer(props) {
  return (
    <div className="PostContainer">
      <CreatePost userInfo={props.userInfo} />

      {props.posts.map((curPost) => {
        return <Post post={curPost} key={uuidv4()} />;
      })}
    </div>
  );
}

function CreatePost(props) {
  const placeholderText = `What's on your mind, ${props.userInfo.firstName}?`;
  return (
    <div className="CreatePost">
      <div className="createPost-submission">
        <div className="createPost-submission-user">
          <FontAwesomeIcon icon="user" style={{ fontSize: "25px" }} />
        </div>
        <input
          className="createPost-submission-input"
          placeholder={placeholderText}
        />
      </div>

      <div className="createPost-nav">
        <span className="createPost-nav-item">
          <FontAwesomeIcon icon="video" className="nav-liveVideo" /> Live Video
        </span>
        <span className="createPost-nav-item">
          <FontAwesomeIcon icon={faPhotoVideo} className="nav-photo" />
          Photo/video
        </span>
        <span className="createPost-nav-item">
          <FontAwesomeIcon icon={faLaughBeam} className="nav-feeling" />
          Feeling/activity
        </span>
      </div>
    </div>
  );
}

export default PostContainer;
