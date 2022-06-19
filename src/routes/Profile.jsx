import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { getVisitingUser } from "../assets/api.js";
import ProfileOverview from "../components/Profile/ProfileOverview";
import AboutCreator from "../components/Profile/AboutCreator";
import MessagesTab from "../components/Profile/MessagesTab";
import FriendsTab from "../components/Profile/FriendsTab/FriendsTab";
import { useUserContext } from "../hooks/useUserContext";

const Profile = () => {
  const { user, setUser } = useUserContext();
  const [visitingProfile, setVisitingProfile] = useState(null);
  const [currentTab, setCurrentTab] = useState("Messages");
  const params = useParams();

  useEffect(() => {
    const fetchVisitingUser = async () => {
      const visitingUser = await getVisitingUser(params.username);
      setVisitingProfile(visitingUser);
      console.log(visitingUser);
    };
    if (user) {
      if (user.username !== params.username) {
        fetchVisitingUser();
      }
    }
  }, [user, params.username]);

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
            setUser={setUser}
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
      {/* First major section of page - showcasing user image, name, and a sub navbar */}
      <ProfileOverview
        visitingProfile={visitingProfile}
        user={user}
        setCurrentTab={setCurrentTab}
        currentTab={currentTab}
        setUser={setUser}
      />
      {handleTabSwitch(currentTab)}
    </div>
  );
};

export default Profile;
