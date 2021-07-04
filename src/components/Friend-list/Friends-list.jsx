import React from "react";
import { Container, Online, Offline } from "./Friend-list.style";

function Friends({ friends }) {
  return (
    <Container>
      <span>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <span key={id}>
            {isOnline ? <Online></Online> : <Offline></Offline>}

            <img src={avatar} alt="{name}" width="48" />
            <p>{name}</p>
          </span>
        ))}
      </span>
    </Container>
  );
}

export default Friends;
