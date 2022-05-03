import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { updateProfilePicture } from "../../assets/api";

export default function UpdateImageForm({ setUser }) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const updatePicture = async () => {
      try {
        const user = await updateProfilePicture(image);
        setUser(user);
      } catch (error) {
        alert("Error uploading new picture");
      }
    };

    // Runs whenever a image gets uploaded to the form
    if (image !== null) {
      updatePicture();
    }
  }, [image, setUser]);

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
