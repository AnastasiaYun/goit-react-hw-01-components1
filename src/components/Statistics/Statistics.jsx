import React from "react";
import { Container, Items, ItemsDrop } from "./Statistics.style";

const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {title && <h2>{title}</h2>}
      <Items>
        {stats.map((stats) => (
          <ItemsDrop key={stats.id}>
            <span>{stats.label}</span>
            <span>{stats.percentage}%</span>
          </ItemsDrop>
        ))}
      </Items>
    </Container>
  );
};

export default Statistics;
