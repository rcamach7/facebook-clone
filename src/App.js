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
import Navbar from "./components/Navbar";
import LeftSideBar from "./components/websiteSidebars/LeftSideBar";
import RightSideBar from "./components/websiteSidebars/RightSideBar";
import MainContent from "./components/MainContent";
import { useEffect, useState } from "react";
import testPosts from "./data/testPostData";

function App() {
  const [userInfo, setUserInfo] = useState({});
  const [posts, setPosts] = useState([]);

  // Initiate test data
  useEffect(() => {
    const testUser = {
      firstName: "Ricardo",
      lastName: "Camacho",
      username: "theRealRicardo",
    };

    setUserInfo(testUser);
    setPosts(testPosts);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main className="main-container">
        <div className="main-container-leftBar">
          <LeftSideBar />
        </div>
        <div className="main-container-content">
          <MainContent posts={posts} userInfo={userInfo} />
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
