import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { sendFriendRequest } from "../../assets/api";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/user/userSlice";

export const RequestFriendButton = ({ username }) => {
  const dispatch = useDispatch();

  const handleRequest = async () => {
    try {
      const user = await sendFriendRequest(username);
      dispatch(setUser(user));
    } catch (error) {
      console.log(error);
      alert("Error sending request");
    }
  };

  return (
    <button className="actionButtons activeButton" onClick={handleRequest}>
      Request Friend
      <FontAwesomeIcon icon={faUserPlus} />
    </button>
  );
};
