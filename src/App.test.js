import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders <Header/>", () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId("appHeader")).toHaveTextContent("mPharma Inventory");
});
