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
import {
  getFirestore,
  collection,
  query,
  getDocs,
  doc,
  setDoc,
  updateDoc,
  orderBy,
  limit,
} from "firebase/firestore";

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
      fullName: "Elon Musk",
      username: "theRealElon",
      icon: stockPic,
    };

    setUserInfo(testUser);
    loadPosts();
    // setPosts(testPosts);
  }, []);

  const loadPosts = async () => {
    const data = [];
    // Request Data from our database.
    const querySnapshot = await getDocs(
      query(
        collection(getFirestore(), "posts"),
        orderBy("timePosted", "asc"),
        limit(10)
      )
    );

    querySnapshot.forEach((resource) => {
      const rawData = resource.data();
      data.push({
        postId: rawData.postId,
        userName: rawData.userName,
        icon: rawData.icon,
        timePosted: rawData.timePosted.toDate(),
        postDescription: rawData.postDescription,
        likes: rawData.likes,
        comments: rawData.comments,
      });
    });

    // Update our state
    setPosts(data);
  };

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

  const handleAddCommentLike = async (postId, commentId) => {
    let indexOfPost = findPostIndexById(postId);

    // Search for comment index in specific post so we can edit later
    let commentIndex = -1;
    const singlePostReference = { ...posts[indexOfPost] };
    singlePostReference.comments.forEach((comment, i) => {
      if (comment.commentId === commentId) {
        commentIndex = i;
      }
    });

    // Get copy of posts, and update only the specific comments like value
    const updatedPostsTwo = [...posts];
    updatedPostsTwo[indexOfPost].comments[commentIndex].likes =
      updatedPostsTwo[indexOfPost].comments[commentIndex].likes + 1;

    // Update our state with new like values
    setPosts(updatedPostsTwo);

    // Reflect this change in our database as well
    const documentReference = doc(getFirestore(), "posts", postId);
    await updateDoc(documentReference, {
      ...updatedPostsTwo[indexOfPost],
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
      comments: [...updatedSinglePost.comments],
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

  const loadTestData = () => {
    testPosts.forEach(async (newPost) => {
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
    });

    setPosts(testPosts);
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
            handleAddCommentLike={handleAddCommentLike}
            handlePostLike={handlePostLike}
          />
        </div>
        <div className="main-container-rightBar">
          <RightSideBar loadTestData={loadTestData} />
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
