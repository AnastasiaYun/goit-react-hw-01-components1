import styled from "@emotion/styled";

export const Container = styled.div`
  writing-mode: vertical-lr;
  margin-top: 35px;

  width: 22%;
  height: 115px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ItemFriends = styled.li`
  display: flex;
  flex-flow: column;
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
