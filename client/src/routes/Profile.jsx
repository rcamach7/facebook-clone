import Navbar from "../components/Navbar";
import { useContext, useState } from "react";
import { UserContext } from "../RouteSwitch";
import ProfileOverview from "../components/Profile/ProfileOverview";
import AboutCreator from "../components/Profile/AboutCreator";
import MessagesTab from "../components/Profile/MessagesTab";
import FriendsTab from "../components/Profile/FriendsTab";

const Profile = () => {
  const { user } = useContext(UserContext);
  const [currentTab, setCurrentTab] = useState("About Creator");

  const handleTabSwitch = (tab) => {
    switch (tab) {
      case "About Creator":
        return <AboutCreator />;
      case "Friends":
        return <FriendsTab />;
      case "Messages":
        return <MessagesTab />;
      default:
        return "Error Populating Tabs";
    }
  };

  return (
    <div className="Profile">
      <header>
        <Navbar icon={user ? user.profilePicture : null} />
      </header>
      {/* First major section of page - showcasing user image, name, and a sub navbar */}
      <ProfileOverview
        user={user}
        setCurrentTab={setCurrentTab}
        currentTab={currentTab}
      />
      {handleTabSwitch(currentTab)}
    </div>
  );
};

export default Profile;
