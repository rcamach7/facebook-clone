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

function Home() {
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
          <MainContent />
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
export default Home;
