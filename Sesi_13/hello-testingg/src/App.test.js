import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import "@testing-library/jest-dom";

test("Render halaman home dengan benar", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  // mencari text tertentu
  const title = screen.getByText(/why do we need test ?/i);
  expect(title).toBeInTheDocument();

  // mencari button tertentu
  // pastikan button kita memiliki role="button"
  const btn = screen.getByRole("button");
  expect(btn).toBeInTheDocument();
  expect(btn).toHaveTextContent("Users List");

  // klik tombol Users List
  fireEvent.click(btn);
  // mencari tombol tertentu
  // pada halaman yang muncul karena klik tombol
  // pastikan button kita memiliki role='button'
  const btn2 = screen.getByRole("button");
  expect(btn2).toBeInTheDocument();
  expect(btn2).toHaveTextContent("Back to Home");
});
