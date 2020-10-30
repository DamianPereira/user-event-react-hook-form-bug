import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DropdownForm from "./DropdownForm";

it("does not cause act warning", async () => {
  render(<DropdownForm />);
  const select = screen.getByRole("combobox");
  userEvent.click(select);
  userEvent.selectOptions(select, "2");
  expect(select.value).toEqual("2");
});
