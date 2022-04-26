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
