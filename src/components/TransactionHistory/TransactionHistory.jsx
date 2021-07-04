import React from "react";

function TransactionHistory({ items }) {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ type, amount, currency, id }) => (
          <span key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </span>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionHistory;
