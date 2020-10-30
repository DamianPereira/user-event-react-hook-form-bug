import React from "react";
import { useForm } from "react-hook-form";
const DropdownForm = () => {
  const { register, errors } = useForm({
    mode: "onChange",
  });
  return (
    <form>
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
    </form>
  );
};

export default DropdownForm;
