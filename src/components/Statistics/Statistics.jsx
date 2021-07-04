import React from "react";
import { Container, Items } from "./Statistics.style";

const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {typeof title === "string" ? (
        <h2>{title}</h2>
      ) : (
        <Items>
          {stats.map((stat) => (
            <li key={stat.id}>
              <span>{stat.label}</span>
              <span>{stat.percentage}%</span>
            </li>
          ))}
        </Items>
      )}
    </Container>
  );
};

export default Statistics;
