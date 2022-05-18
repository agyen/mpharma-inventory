import "@testing-library/jest-dom";
import * as React from "react";
import { render } from "@testing-library/react";
import { Header } from "../Header";

it("should have mPharma Inventory in header", () => {
  const { container } = render(<Header />);
  const header = container.querySelector("h4");
  expect(header).toHaveTextContent("mPharma Inventory");
});
