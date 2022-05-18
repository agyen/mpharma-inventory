import "@testing-library/jest-dom";
import * as React from "react";
import { render, screen } from "@testing-library/react";
import Product from "../Product";

const product = {
  id: 1,
  name: "Exforge 10mg",
  prices: [
    {
      id: 1,
      price: 10.99,
      date: "2019-01-01T17:16:32+00:00",
    },
    {
      id: 2,
      price: 9.2,
      date: "2018-11-01T17:16:32+00:00",
    },
  ],
};

it("should display product name", () => {
  const { getByTestId } = render(<Product product={product} />);
  expect(getByTestId("testProductName")).toHaveTextContent(product.name);
});

it("should get first price", () => {
  const { container } = render(<Product product={product} />);
  const prices = container.querySelector("li");
  expect(prices).toHaveTextContent(product.prices[0].price);
});
