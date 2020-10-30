import React, { useState } from "react";
import { useForm } from "react-hook-form";
const DropdownForm = () => {
  const { register } = useForm({
    mode: "onChange",
  });

  return (
    <form>
      <select
        defaultValue={0}
        name="test"
        ref={register({ required: true })}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
    </form>
  );
};

export default DropdownForm;
