import "@testing-library/jest-dom";
import * as React from "react";
import { render, screen } from "@testing-library/react";
import { CustomModal } from "../CustomModal";

const mockProps = {
  btnLabel: "Delete",
  modalId: "ModalId",
  title: "Delete product",
  btnLabel: "Delete",
  actionLabel: "Delete",
  actionHandler: jest.fn(),
  btnClass: "btn-primary",
  btnIcon: "image.svg",
  children: "<div> moch <div>",
};

it("should have button label", () => {
  const { getByTestId } = render(<CustomModal {...mockProps} />);
  expect(getByTestId("buttonModal")).toHaveTextContent("Delete");
});

it("should use icon as button label", () => {
  render(<CustomModal {...mockProps} />);
  const icon = screen.getByRole("img");
  expect(icon).toHaveAttribute("src", "./icons/image.svg");
  expect(icon).toHaveAttribute("alt", "Delete");
});

it("should set modal title to Delete product", () => {
  const { container } = render(<CustomModal {...mockProps} />);
  const modalTitle = container.querySelector("h5");
  expect(modalTitle).toHaveTextContent("Delete product");
});
