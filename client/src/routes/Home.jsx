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
import PostsContainer from "../components/homeComponents/PostsContainer";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="Home">
      <header>
        <Navbar />
      </header>
      <main>
        <div className="leftBar">
          <LeftSideBar />
        </div>
        <div className="mainContent">
          <PostsContainer />
        </div>
        <div className="rightBar">
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
export default Home;
