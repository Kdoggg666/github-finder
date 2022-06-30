import React, { Component } from "react";

class UserItem extends Component {
  state = {
    id: "id",
    login: "mojombo",
    avatar_url: "https://avatars.githubusercontent.com/u/1?v=4F",
    html_url: "https://github.com/mojombo",
  };

  render() {
    const { login, avatar_url, html_url } = this.state; //destructures the object so u dont have to use this.state for variables
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt=""
          className="round-img"
          style={{ width: "60px" }}
        />
        <h3>{login}</h3>
        <div>
          <a
            href={html_url}
            className="btn btn-dark btn-sm my-1"
            target="_blank" 
            rel="noreferrer"
          >
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
