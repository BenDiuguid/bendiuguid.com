import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App", () => {
  render(<App />);
  const element = screen.getByText(/Benjamin Diuguid/i);
  expect(element).toBeInTheDocument();
});
