import React from "react";
import Profile from "./Profile";
import TeamContext from "./TeamContext";

const Team = () => {
  return (
    <div>
      <TeamContext>
        <Profile />
      </TeamContext>
    </div>
  );
};

export default Team;
