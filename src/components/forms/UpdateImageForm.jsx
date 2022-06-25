import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { updateProfilePicture } from "../../assets/api";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/user/userSlice";

export default function UpdateImageForm() {
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const updatePicture = async () => {
      try {
        const user = await updateProfilePicture(image);
        dispatch(setUser(user));
      } catch (error) {
        alert("Error uploading new picture");
      }
    };

    // Runs whenever a image gets uploaded to the form
    if (image !== null) {
      updatePicture();
    }
  }, [image, dispatch]);

  return (
    <form className="UpdateImageForm">
      <label htmlFor="fileUpload">
        <FontAwesomeIcon icon={faCamera} /> Edit Profile Picture
      </label>
      <input
        className="fileUpload"
        id="fileUpload"
        type="file"
        accept=".jpg, .jpeg, .png"
        onChange={(e) => setImage(e.target.files[0])}
      />
    </form>
  );
}
