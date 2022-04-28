import React from "react";

export default function FriendsTab() {
  return (
    <div className="FriendsTab">
      <div className="content">
        <p>Hello World</p>
        <div className="friendsContainer"></div>
      </div>
    </div>
  );
}

function Friend() {
  return (
    <div className="Friend">
      <p>I am a friend</p>
    </div>
  );
}
