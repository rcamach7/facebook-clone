import React from "react";
import Friend from "./Friend";

export default function FriendsTab({
  friends,
  receivedFriendRequests,
  sentFriendRequests,
}) {
  const myFriends = friends.map((user) => {
    return <Friend key={user._id} friend={user.friend} />;
  });

  const requestedFriends = sentFriendRequests.map((requestedFriend) => {
    return <Friend key={requestedFriend._id} friend={requestedFriend._id} />;
  });

  const receivedRequestsFriend = receivedFriendRequests.map(
    (receivedRequestsFriend) => {
      return (
        <Friend
          key={receivedRequestsFriend._id._id}
          receivedRequestsFriend={receivedRequestsFriend._id}
        />
      );
    }
  );

  return (
    <section className="FriendsTab">
      <div className="content">
        <p className="tabTitle">My Friends</p>

        <div className="friendsContainer">{myFriends}</div>

        <div className="requestedFriends">
          <span>Requested friends</span>
          <div className="container">{requestedFriends}</div>
        </div>

        <div className="receivedFriendRequests">
          <span>Received friend requests</span>
          <div className="container">{receivedRequestsFriend}</div>
        </div>
      </div>
    </section>
  );
}
