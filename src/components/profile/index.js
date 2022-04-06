import React from "react";
import PersonList from "./personlist";
import EditProfile from "./editprofile";
import SideMenu from "../common/sideMenu";

function Profile() {
  return (
    <div className="profile-interface">
      <div className="profile-sidemenu">
        <SideMenu />
      </div>
      <div className="profile-person-data">
        <PersonList />
        <EditProfile />
      </div>
    </div>
  );
}

export default Profile;
