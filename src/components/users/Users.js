import React, { useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import PropTypes from 'prop-types';
import GithubContext from "../../context/github/githubContext";

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { loading, users } = githubContext;

  if (loading) {
    return <Spinner />; // if page loading show spinner 
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => ( // returns an array of users
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};


const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;
