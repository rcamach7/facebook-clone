import "./styles/App.css";
// Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faHome,
  faUserFriends,
  faVideo,
  faStore,
  faUsers,
  faUser,
  faCaretSquareDown,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "./components/Navbar";
import LeftSideBar from "./components/websiteSidebars/LeftSideBar";
import RightSideBar from "./components/websiteSidebars/RightSideBar";
import MainContent from "./components/MainContent";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
// Test Data
import testPosts from "./data/testPostData";
import stockPic from "./assets/elon.jpeg";
// Firebase Configuration Files
import { getFirebaseConfig } from "./data/config.js";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, updateDoc } from "firebase/firestore";

function App() {
  const [userInfo, setUserInfo] = useState({});
  const [posts, setPosts] = useState([]);

  // Run on start up
  useEffect(() => {
    // Connect To Firebase
    const firebaseAppConfig = getFirebaseConfig();
    initializeApp(firebaseAppConfig);

    // Test Data
    const testUser = {
      fullName: "Ricardo Camacho",
      username: "theRealRicardo",
      icon: stockPic,
    };

    setUserInfo(testUser);
    setPosts(testPosts);
  }, []);

  const handlePostLike = async (postId) => {
    let indexOfPost = findPostIndexById(postId);

    const updatedSinglePost = { ...posts[indexOfPost] };
    let currentLikes = updatedSinglePost.likes;
    updatedSinglePost.likes = currentLikes + 1;

    const updatedPosts = [...posts];
    updatedPosts[indexOfPost] = updatedSinglePost;

    setPosts(updatedPosts);

    // Update Database
    const documentReference = doc(getFirestore(), "posts", postId);
    await updateDoc(documentReference, {
      likes: currentLikes + 1,
    });
  };

  const handleAddLike = async (postId, commentId) => {
    let indexOfPost = findPostIndexById(postId);

    // Search for comment given its ID, and update like count
    const updatedSinglePost = { ...posts[indexOfPost] };
    updatedSinglePost.comments.forEach((comment, i) => {
      if (comment.commentId === commentId) {
        comment.likes = comment.likes + 1;
      }
    });

    // Replace old post with new post info into a shallow copy, then set the state to updated posts.
    const updatedPosts = [...posts];
    updatedPosts[indexOfPost] = updatedSinglePost;

    setPosts(updatedPosts);

    const documentReference = doc(getFirestore(), "posts", postId);
    await updateDoc(documentReference, {
      ...updatedSinglePost,
    });
  };

  const handleAddCommentToPost = async (postId, commentIn) => {
    // First Loop to find the correct post that we need to add a comment to
    let indexOfPost = -1;
    posts.forEach((curPost, i) => {
      if (postId === curPost.postId) {
        indexOfPost = i;
      }
    });
    // Shallow copy of the specific post in question only, and addition of new comment
    const updatedSinglePost = { ...posts[indexOfPost] };
    updatedSinglePost.comments = [
      ...updatedSinglePost.comments,
      {
        commentId: uuidv4(),
        userName: userInfo.username,
        icon: userInfo.icon,
        comment: commentIn,
        likes: 0,
      },
    ];

    // Shallow copy of entire posts, with insertion and replacement of old post, for a updated version of it.
    const updatedPosts = [...posts];
    updatedPosts[indexOfPost] = updatedSinglePost;

    setPosts(updatedPosts);

    // Update Database with new comment using above references
    const documentReference = doc(getFirestore(), "posts", postId);
    await updateDoc(documentReference, {
      comments: [
        ...updatedSinglePost.comments,
        {
          commentId: uuidv4(),
          userName: userInfo.username,
          icon: userInfo.icon,
          comment: commentIn,
          likes: 0,
        },
      ],
    });
  };

  const handleNewPost = async (newPost) => {
    // Push New Post To Database
    try {
      await setDoc(doc(getFirestore(), "posts", newPost.postId), {
        postId: newPost.postId,
        userName: newPost.userName,
        icon: newPost.icon,
        timePosted: newPost.timePosted,
        postDescription: newPost.postDescription,
        likes: newPost.likes,
        comments: newPost.comments,
      });
    } catch (error) {
      console.error("Error writing to database", error);
    }

    // Update webpage with New Posts without calling DB
    const updatedPosts = [...posts];
    updatedPosts.push(newPost);

    setPosts(updatedPosts);
  };

  const findPostIndexById = (postId) => {
    let indexOfPost = -1;
    posts.forEach((curPost, i) => {
      if (postId === curPost.postId) {
        indexOfPost = i;
      }
    });
    return indexOfPost;
  };

  return (
    <div className="App">
      <header className="App-header">
        <Navbar icon={userInfo.icon} />
      </header>
      <main className="main-container">
        <div className="main-container-leftBar">
          <LeftSideBar userInfo={userInfo} />
        </div>
        <div className="main-container-content">
          <MainContent
            posts={posts}
            userInfo={userInfo}
            handleNewPost={handleNewPost}
            handleAddCommentToPost={handleAddCommentToPost}
            handleAddLike={handleAddLike}
            handlePostLike={handlePostLike}
          />
        </div>
        <div className="main-container-rightBar">
          <RightSideBar />
        </div>
      </main>
    </div>
  );
}

library.add(
  faSearch,
  faHome,
  faUserFriends,
  faVideo,
  faStore,
  faUsers,
  faUser,
  faCaretSquareDown,
  faPlus
);
export default App;
