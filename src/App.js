import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faHome,
  faUserFriends,
  faVideo,
  faStore,
  faUsers,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
    </div>
  );
}

library.add(faSearch, faHome, faUserFriends, faVideo, faStore, faUsers, faUser);
export default App;
