import styled from "@emotion/styled";

export const Container = styled.div`
  flex-direction: column;
  margin-top: 35px;
`;

export const Span = styled.span`
  display: flex;
`;

export const ItemFriends = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Online = styled.span`
  background-color: green;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 15px;
`;

export const Offline = styled.span`
  background-color: red;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 15px;
`;
