import React from "react";
import { useForm } from "react-hook-form";
const DropdownForm = ({ onSubmit }) => {
  const { register, errors } = useForm({
    mode: "onChange",
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e);
      }}
    >
      <select
        name="test"
        ref={register({
          validate: (value) => {
            return value !== "3";
          },
        })}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
      {errors.test && "Option can't be 3!"}
      <button type="submit">Submit</button>
    </form>
  );
};

export default DropdownForm;
