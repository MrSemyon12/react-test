// import { render, unmountComponentAtNode } from "react-dom";
// import { act } from "react-dom/test-utils";
// import Hello from "./Hello";

// let container = null;

// beforeEach(() => {
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });

// it("render component hello with names or without", () => {
//   act(() => {
//     render(<Hello name="user" />, container);
//   });
//   expect(container.textContent).toBe("Hello, user");

//   act(() => {
//     render(<Hello name="admin" />, container);
//   });
//   expect(container.textContent).toBe("Hello, admin");

//   act(() => {
//     render(<Hello />, container);
//   });
//   expect(container.textContent).toBe("Hello, unknown");
// });

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Hello from "./Hello";

test("render component hello with user", () => {
  render(<Hello name="user" />);
  expect(screen.getByText(/Hello, user/)).toBeInTheDocument();
});

test("render component hello with admin", () => {
  render(<Hello name="admin" />);
  expect(screen.getByText(/Hello, admin/)).toBeInTheDocument();
});

test("render component hello without name", () => {
  render(<Hello />);
  expect(screen.getByText(/Hello, unknown/)).toBeInTheDocument();
});
