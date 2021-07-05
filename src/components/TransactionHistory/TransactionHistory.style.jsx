import styled from "@emotion/styled";

export const Container = styled.div`
  width: 530px;
  border: 1px solid black;
  margin-top: 30px;
`;

export const LineTable = styled.table`
  width: inherit;
`;

export const Topic = styled.thead`
  background-color: #181818;
  color: antiquewhite;
`;

export const TableRow = styled.tr`
  background-color: white;
  &:nth-child(2n) {
    background-color: silver;
  }
`;
