import axios from "axios";
import config from "./config.json";

// Retrieve current user info
export async function getUser() {
  try {
    const {
      data: { user },
    } = await axios.get(`${config.apiUrl}/users/`);
    return Promise.resolve(user);
  } catch (error) {
    return Promise.reject(error);
  }
}

// Retrieve posts
export async function getPosts() {
  try {
    const {
      data: { posts },
    } = await axios.get(`${config.apiUrl}/posts/`);
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
    } = await axios.post(`${config.apiUrl}/users/`, {
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
    const {
      data: { post },
    } = await axios.post(`${config.apiUrl}/posts/`, {
      description,
      picture,
    });
    return Promise.resolve(post);
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function getToken(account) {
  try {
    const {
      data: { token },
    } = await axios.post(`${config.apiUrl}/login`, account);
    return Promise.resolve(token);
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function processPostLike(postId) {
  try {
    const {
      data: { post },
    } = await axios.put(`${config.apiUrl}/posts/${postId}`, {
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
    } = await axios.put(`${config.apiUrl}/posts/${postId}`, {
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
    } = await axios.put(`${config.apiUrl}/posts/${postId}`, {
      comment,
    });
    return Promise.resolve(post);
  } catch (error) {
    return Promise.reject(error);
  }
}
