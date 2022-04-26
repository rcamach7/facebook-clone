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
import LeftSideBar from "../components/homeComponents/LeftSideBar";
import RightSideBar from "../components/homeComponents/RightSideBar";
import MainContent from "../components/homeComponents/MainContent";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

function Home() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <Navbar icon={profilePicture} />
  //     </header>
  //     <main className="main-container">
  //       <div className="main-container-leftBar">
  //         <LeftSideBar userInfo={userInfo} profilePicture={profilePicture} />
  //       </div>
  //       <div className="main-container-content">
  //         <MainContent
  //           posts={posts}
  //           userInfo={userInfo}
  //           profilePicture={profilePicture}
  //           handleNewPost={handleNewPost}
  //           handleAddCommentToPost={handleAddCommentToPost}
  //           handleAddCommentLike={handleAddCommentLike}
  //           handlePostLike={handlePostLike}
  //         />
  //       </div>
  //       <div className="main-container-rightBar">
  //         <RightSideBar loadTestData={loadTestData} />
  //       </div>
  //     </main>
  //   </div>
  // );
  return <div>Hello World</div>;
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
export default Home;
