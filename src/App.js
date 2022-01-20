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
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "./components/Navbar";
import LeftSideBar from "./components/LeftSideBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main className="main-container">
        <div className="main-container-leftBar">
          <LeftSideBar />
        </div>
        <div className="main-container-content">b</div>
        <div className="main-container-rightBar">c</div>
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
  faCaretSquareDown
);
export default App;
