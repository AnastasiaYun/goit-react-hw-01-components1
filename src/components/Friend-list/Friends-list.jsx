import React from "react";
import {
  Container,
  ItemFriends,
  Span,
  Online,
  Offline,
} from "./Friend-list.style";

function Friends({ friends }) {
  return (
    <Container>
      <Span>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <ItemFriends key={id}>
            {isOnline ? <Online></Online> : <Offline></Offline>}

            <img src={avatar} alt="{name}" width="48" />
            <p>{name}</p>
          </ItemFriends>
        ))}
      </Span>
    </Container>
  );
}

export default Friends;
