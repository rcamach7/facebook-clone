// General functions shared between components or logic not important to keep within component.

export function findIndexOfPost(posts, postId) {
  let index = -1;
  posts.forEach((post, i) => {
    if (post._id === postId) {
      index = i;
    }
  });
  return index;
}

export function isFriend(friends, username) {
  let friend = false;
  friends.forEach((curFriend) => {
    if (curFriend.friend.username === username) {
      friend = true;
    }
  });

  return friend;
}

export function isRequested(sentRequests, username) {
  let requested = false;
  sentRequests.forEach((curUser) => {
    if (curUser._id.username === username) {
      requested = true;
    }
  });

  return requested;
}

export function isPendingAcceptance(receivedFriendRequests, username) {
  let pending = false;
  receivedFriendRequests.forEach((curUser) => {
    if (curUser._id.username === username) {
      pending = true;
    }
  });

  return pending;
}
