import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { getVisitingUser } from "../data/api.js";
import ProfileOverview from "../components/Profile/ProfileOverview";
import AboutCreator from "../components/Profile/AboutCreator";
import MessagesTab from "../components/Profile/MessagesTab";
import FriendsTab from "../components/Profile/FriendsTab/FriendsTab";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.user.value);
  const [currentTab, setCurrentTab] = useState("Messages");

  const [visitingProfile, setVisitingProfile] = useState(null);
  const params = useParams();

  // Will manage the user to be displayed, based on URL Parameters provided.
  useEffect(() => {
    const fetchVisitingUser = async () => {
      const visitingUser = await getVisitingUser(params.username);
      setVisitingProfile(visitingUser);
    };
    if (user) {
      if (user.username !== params.username) {
        fetchVisitingUser();
      } else {
        setVisitingProfile(null);
      }
    }
  }, [user, params.username]);

  // Manages section user is viewing on profile tabs.
  const handleTabSwitch = (tab) => {
    switch (tab) {
      case "About Creator":
        return <AboutCreator />;
      case "Friends":
        return (
          <FriendsTab
            friends={user ? user.friends : []}
            sentFriendRequests={user ? user.sentFriendRequests : []}
            receivedFriendRequests={user ? user.receivedFriendRequests : []}
          />
        );
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

      {/* Shows user image, name, and a sub navbar */}
      <ProfileOverview
        visitingProfile={visitingProfile}
        setCurrentTab={setCurrentTab}
        currentTab={currentTab}
      />
      {handleTabSwitch(currentTab)}
    </div>
  );
};

export default Profile;
