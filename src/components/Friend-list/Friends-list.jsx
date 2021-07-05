import React from "react";
import { Container, ItemFriends, Online, Offline } from "./Friend-list.style";

function Friends({ friends }) {
  return (
    <Container>
      <span>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <ItemFriends key={id}>
            {isOnline ? <Online></Online> : <Offline></Offline>}

            <img src={avatar} alt="{name}" width="48" />
            <p>{name}</p>
          </ItemFriends>
        ))}
      </span>
    </Container>
  );
}

export default Friends;
