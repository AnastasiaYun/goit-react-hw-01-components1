import React from "react";
import { Container, Items, ItemsDrop } from "./Statistics.style";

const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {typeof title === "string" ? (
        <h2>{title}</h2>
      ) : (
        <Items>
          {stats.map((stat) => (
            <ItemsDrop key={stat.id}>
              <span>{stat.label}</span>
              <span>{stat.percentage}%</span>
            </ItemsDrop>
          ))}
        </Items>
      )}
    </Container>
  );
};

export default Statistics;
