import React from "react";
import {
  Container,
  LineTable,
  Topic,
  TableRow,
} from "./TransactionHistory.style";

function TransactionHistory({ items }) {
  return (
    <Container class="transaction-history">
      <LineTable>
        <Topic>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </Topic>

        <tbody>
          {items.map(({ type, amount, currency, id }) => (
            <TableRow key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </TableRow>
          ))}
        </tbody>
      </LineTable>
    </Container>
  );
}

export default TransactionHistory;
