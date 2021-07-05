import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  border: 1px solid;
  padding: 10px;
  color: brown;
`;

export const Items = styled.ul`
  display: inline-flex;
  list-style: none;
  padding-left: 0;
  text-align: center;
`;

export const ItemsDrop = styled.li`
  margin-left: 10px;
  border: outset;

  height: 40px;
  width: 84px;
  padding-top: 15px;
`;
