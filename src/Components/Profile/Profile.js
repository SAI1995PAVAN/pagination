import React from "react";
import "./Profile.css";

const Profile = (props) => {
  const { avatar_url, login, html_url } = props;
  return (
    <div className="profile">
      <div className="profile-image">
        <img src={avatar_url} alt={login} />
      </div>
      <div className="profile-content">
        <h2>{login}</h2>
        <a href={html_url} className="view-profile">
          View Profile
        </a>
      </div>
    </div>
  );
};

export default Profile;
