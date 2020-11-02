import React from "react";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DropdownForm from "./DropdownForm";

// actually throws warning
it("submits and does not cause act warning with userEvent without act", async () => {
  const submitCallback = jest.fn();

  render(<DropdownForm onSubmit={submitCallback} />);

  const select = screen.getByRole("combobox");
  userEvent.selectOptions(select, "2");
  userEvent.click(screen.getByRole("button"));
  expect(submitCallback).toHaveBeenCalled();
});

// Does not emit any warning
it("submits and does not cause act warning with userEvent with act", async () => {
  const submitCallback = jest.fn();

  render(<DropdownForm onSubmit={submitCallback} />);

  const select = screen.getByRole("combobox");
  await act(async () => {
    await userEvent.selectOptions(select, "2");
  });
  userEvent.click(screen.getByRole("button"));
  expect(submitCallback).toHaveBeenCalled();
});

