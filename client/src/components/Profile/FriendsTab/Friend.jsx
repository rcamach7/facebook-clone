import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Friend({ friend, receivedRequestsFriend }) {
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

  return (
    <div className="Friend">
      <img src={image} alt="" />
      <p className="name">{name}</p>
      <div className="buttonContainer">
        {receivedRequestsFriend ? (
          <button>
            <FontAwesomeIcon icon={faPlus} /> Accept
          </button>
        ) : null}
      </div>
    </div>
  );
}
