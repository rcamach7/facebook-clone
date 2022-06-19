import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { acceptFriendRequest } from "../../../assets/api";
import { Link } from "react-router-dom";

export default function Friend({ friend, receivedRequestsFriend, setUser }) {
  const name = friend
    ? friend.fullName
    : receivedRequestsFriend
    ? receivedRequestsFriend.fullName
    : "error";
  const image = friend
    ? friend.profilePicture
    : receivedRequestsFriend
    ? receivedRequestsFriend.profilePicture
    : "error";

  const handleAcceptRequest = async (e) => {
    e.preventDefault();
    try {
      const user = await acceptFriendRequest(receivedRequestsFriend._id);
      setUser(user);
    } catch (error) {
      alert("Error accepting request");
    }
  };

  return (
    <div className="Friend">
      <img src={image} alt="" />
      <Link
        to={`/facebook-clone/profile/${friend && friend.username}`}
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
        }}
      >
        <p className="name">{name}</p>
      </Link>
      <div className="buttonContainer">
        {receivedRequestsFriend ? (
          <button onClick={(e) => handleAcceptRequest(e)}>
            <FontAwesomeIcon icon={faPlus} /> Accept
          </button>
        ) : null}
      </div>
    </div>
  );
}
