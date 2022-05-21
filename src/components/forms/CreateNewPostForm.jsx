import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretSquareDown,
  faPhotoVideo,
  faLaughBeam,
  faMapMarkerAlt,
  faMicrophone,
  faEllipsisH,
  faWindowClose,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useUserContext } from "../../hooks/useUserContext";
import { createPost } from "../../assets/api";

function CreateNewPostForm({ setShowPopup, setPosts }) {
  const { user } = useUserContext();
  const formPlaceholder = `What's on your mind, ${
    user ? user.fullName : "loading"
  }?`;
  // Form input fields
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState(null);

  const handleSubmission = async (e) => {
    e.preventDefault();
    try {
      const post = await createPost(description, picture);
      setPosts((prevState) => {
        const newState = [...prevState];
        // Pushes new post to the beginning of the collection - since posts is sorted by date.
        newState.unshift(post);
        return newState;
      });
      setShowPopup(false);
    } catch (error) {
      console.log(error.response);
      alert("Error creating new post");
    }
  };

  return (
    <div className="form-container">
      <form className="CreateNewPostForm" onSubmit={handleSubmission}>
        <div className="createNewPostForm-title">
          <p
            className="createNewPostForm-title-item text"
            style={{ fontWeight: "bolder" }}
          >
            Create post
          </p>
          <p className="createNewPostForm-title-item close">
            <FontAwesomeIcon
              icon={faWindowClose}
              style={{ fontSize: "20px" }}
              onClick={() => setShowPopup(false)}
            />
          </p>
        </div>

        <div className="createNewPostForm-userInfo">
          <div className="createNewPostForm-userInfo-icon">
            <img src={user ? user.profilePicture : null} alt="" />
          </div>
          <div className="createNewPostForm-userInfo-data">
            <p style={{ fontWeight: "bolder", fontSize: "15px" }}>
              {user ? user.fullName : null}
            </p>
            <div className="createNewPostForm-userInfo-data-nav">
              <FontAwesomeIcon icon={faUsers} style={{ fontSize: "13px" }} />
              <span style={{ margin: "0px 5px 0 5px" }}>Friends</span>
              <FontAwesomeIcon
                icon={faCaretSquareDown}
                style={{ fontSize: "13px" }}
              />
            </div>
          </div>
        </div>

        <label htmlFor="testInput"></label>
        <textarea
          id="testInput"
          className="createNewPostForm-input"
          placeholder={formPlaceholder}
          onChange={(e) => setDescription(e.target.value)}
          required
          minLength="5"
        />
        {picture ? (
          <div className="picturePreview">
            <img src={URL.createObjectURL(picture)} alt="post" />
          </div>
        ) : null}
        <div className="createNewPostForm-subNavbar">
          <span className="subNavbar-addMore">Add to your post</span>

          <label className="subNavbar-item" htmlFor="image_uploads">
            <FontAwesomeIcon
              style={{ color: "rgb(69,189,98)" }}
              icon={faPhotoVideo}
            />
            <input
              className="file-upload"
              type="file"
              id="image_uploads"
              accept=".jpg, .jpeg, .png, .gif"
              onChange={(e) => setPicture(e.target.files[0])}
            />
          </label>

          <span className="subNavbar-item">
            <FontAwesomeIcon
              style={{ color: "rgb(247,185,40)" }}
              icon={faLaughBeam}
            />
          </span>
          <span className="subNavbar-item">
            <FontAwesomeIcon
              style={{ color: "rgb(245,83,62)" }}
              icon={faMapMarkerAlt}
            />
          </span>
          <span className="subNavbar-item">
            <FontAwesomeIcon
              style={{ color: "rgb(245,83,62)" }}
              icon={faMicrophone}
            />
          </span>
          <span className="subNavbar-item">
            <FontAwesomeIcon
              style={{ color: "rgb(96,103,112)" }}
              icon={faEllipsisH}
            />
          </span>
        </div>

        <input
          className="createNewPostForm-submit"
          type="submit"
          value="Post"
        />
      </form>
    </div>
  );
}

export default CreateNewPostForm;
