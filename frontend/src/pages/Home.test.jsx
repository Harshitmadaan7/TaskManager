import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./Home";

test("renders Home page main text", () => {
  render(<Home />);

  
  const mainText = screen.getByText(/StackWizard Task Manager/i);

  expect(mainText).toBeInTheDocument();
});

