import React from "react";
import "./ProfileList.css";
import Profile from "../Profile/Profile";

const ProfileList = (props) => {
  const { profilesData } = props;
  return (
    <section className="profiles-list">
      {profilesData.map((profile) => {
        return <Profile key={profile.id} {...profile} />;
      })}
    </section>
  );
};

export default ProfileList;
