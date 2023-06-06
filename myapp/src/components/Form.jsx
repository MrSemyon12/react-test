import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <span>Id</span>
        <input
          {...register("id", {
            required: {
              value: true,
              message: "id is required",
            },
            valueAsNumber: true,
            min: {
              value: 0,
              message: "no less then 0",
            },
            max: {
              value: 10,
              message: "no more than 10",
            },
          })}
          type="number"
        />
      </label>
      <p>{errors?.id?.message}</p>
      <label>
        <span>Text</span>
        <input
          {...register("text", {
            required: {
              value: true,
              message: "text is required",
            },
            maxLength: {
              value: 20,
              message: "len no more than 20",
            },
          })}
        />
      </label>
      <p>{errors?.text?.message}</p>
      <button type="submit">Send form</button>
    </form>
  );
}
