import "@testing-library/jest-dom";
import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { NewProductForm } from "../NewProductForm";

const mockProps = {
  productName: "mockName",
  setProductName: jest.fn(),
  initialPrice: 12,
  setInitialPrice: jest.fn(),
};

it("should render onChange", () => {
  const { getByTestId } = render(<NewProductForm {...mockProps} />);
  fireEvent.change(getByTestId("addProductName"));
  expect(mockProps.setProductName).toBeDefined();
});
