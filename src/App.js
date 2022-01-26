import "./styles/App.css";
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
import stockPic from "./assets/elon.jpeg";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import LeftSideBar from "./components/websiteSidebars/LeftSideBar";
import RightSideBar from "./components/websiteSidebars/RightSideBar";
import MainContent from "./components/MainContent";
import testPosts from "./data/testPostData";

function App() {
  const [userInfo, setUserInfo] = useState({});
  const [posts, setPosts] = useState([]);

  // Initiate test data
  useEffect(() => {
    const testUser = {
      fullName: "Ricardo Camacho",
      username: "theRealRicardo",
      icon: stockPic,
    };

    setUserInfo(testUser);
    setPosts(testPosts);
  }, []);

  const handleAddLike = (postId) => {
    console.log(postId);
  };

  const handleAddCommentToPost = (postId, commentIn) => {
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
      { userName: userInfo.username, icon: userInfo.icon, comment: commentIn },
    ];

    // Shallow copy of entire posts, with insertion and replacement of old post, for a updated version of it.
    const updatedPosts = [...posts];
    updatedPosts[indexOfPost] = updatedSinglePost;

    setPosts(updatedPosts);
  };

  const handleNewPost = (newPost) => {
    const updatedPosts = [...posts];
    updatedPosts.push(newPost);

    setPosts(updatedPosts);
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
