import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;

// Retrieve current user info
export async function getUser() {
  try {
    const {
      data: { user },
    } = await axios.get(`/users/`);
    return Promise.resolve(user);
  } catch (error) {
    return Promise.reject(error);
  }
}

// Retrieve current user info
export async function getVisitingUser(username) {
  try {
    const {
      data: { user },
    } = await axios.get(`/users/visit/${username}`);
    return Promise.resolve(user[0]);
  } catch (error) {
    return Promise.reject(error);
  }
}

// Retrieve posts
export async function getPosts() {
  try {
    const {
      data: { posts },
    } = await axios.get(`/posts/`);
    return Promise.resolve(posts);
  } catch (error) {
    return Promise.reject(error);
  }
}

// Create a new account
export async function createUser(account) {
  try {
    const {
      data: { token },
    } = await axios.post(`/users/`, {
      fullName: account.fullName,
      username: account.username.toLowerCase(),
      password: account.password,
    });
    return Promise.resolve(token);
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function createPost(description, picture) {
  try {
    if (picture !== null) {
      // Create a formData instance so we can send multipart/form-data outside of form control
      const formData = new FormData();
      formData.append("picture", picture);
      formData.append("description", description);

      const {
        data: { post },
      } = await axios({
        method: "post",
        url: `/posts/`,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      return Promise.resolve(post);
    } else {
      const {
        data: { post },
      } = await axios.post(`/posts/`, {
        description,
        picture,
      });
      return Promise.resolve(post);
    }
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function deletePost(postId) {
  try {
    await axios.delete(`/posts/${postId}`);
    // Retrieve collection of new posts
    const posts = await getPosts();
    return Promise.resolve(posts);
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function getToken(account) {
  try {
    const {
      data: { token },
    } = await axios.post(`/login`, account);
    return Promise.resolve(token);
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function processPostLike(postId) {
  try {
    const {
      data: { post },
    } = await axios.put(`/posts/${postId}`, {
      postLike: true,
    });
    return Promise.resolve(post);
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function processCommentLike(postId, commentId) {
  try {
    const {
      data: { post },
    } = await axios.put(`/posts/${postId}`, {
      commentLike: true,
      commentId,
    });
    return Promise.resolve(post);
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function processPostComment(postId, comment) {
  try {
    const {
      data: { post },
    } = await axios.put(`/posts/${postId}`, {
      comment,
    });
    return Promise.resolve(post);
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function acceptFriendRequest(friendId) {
  try {
    const {
      data: { user },
    } = await axios.post(`/friends/${friendId}`);
    return Promise.resolve(user);
  } catch (error) {
    console.log(error.response);
    return Promise.reject(error);
  }
}

export async function sendFriendRequest(friendId) {
  try {
    const {
      data: { user },
    } = await axios.put(`/friends/${friendId}`);
    return Promise.resolve(user);
  } catch (error) {
    console.log(error.response);
    return Promise.reject(error);
  }
}

export async function updateProfilePicture(profilePicture) {
  try {
    // Create a formData instance so we can send multipart/form-data outside of form control
    const formData = new FormData();
    formData.append("profilePicture", profilePicture);

    const {
      data: { user },
    } = await axios({
      method: "put",
      url: `/users/`,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
    return Promise.resolve(user);
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
}

export async function updateName(updatedFullName) {
  try {
    const {
      data: { user },
    } = await axios.put(`/users/`, {
      fullName: updatedFullName,
    });
    return Promise.resolve(user);
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
}
