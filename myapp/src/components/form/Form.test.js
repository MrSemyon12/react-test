import { render, screen, fireEvent } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Form from "./Form";

test("submit from", () => {
  //   render(<Form onSubmit={handleSubmit} />);
  //   fireEvent.change(screen.getByLabelText(/Login/), {
  //     target: { value: "admin" },
  //   });

  //   fireEvent.change(screen.getByLabelText(/Password/), {
  //     target: { value: "admin" },
  //   });

  //   fireEvent.submit(screen.getByText(/Submit/));

  const handleSubmit = jest.fn();
  render(<Form onSubmit={handleSubmit} />);
  const loginInput = screen.getByLabelText(/Login/);
  const passwordInput = screen.getByLabelText(/Password/);
  const submitButton = screen.getByText(/Submit/);

  userEvent.type(loginInput, "admin");
  userEvent.type(passwordInput, "admin");
  userEvent.click(submitButton);

  expect(handleSubmit).toHaveBeenCalledWith({
    login: "admin",
    password: "password",
  });
});
