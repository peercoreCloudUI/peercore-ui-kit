import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./index";
import "@testing-library/jest-dom"; // ✅ Add this

test("renders button with label", () => {
  render(<Button label="Click Me" />);
  expect(screen.getByText("Click Me")).toBeInTheDocument(); // Should work now
});
