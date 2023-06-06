import { React, useContext } from "react";
import { useForm } from "react-hook-form";
import { myContext } from "./myContext";

export default function AddPost() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const { addPost } = useContext(myContext);
  const onSubmit = (data) => {
    data = { ...data, id: Date.now() };
    addPost(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", justifyContent: "space-around" }}
    >
      <label>
        <span>Title</span>
        <input
          {...register("title", {
            required: {
              value: true,
              message: "body is required",
            },
          })}
        />
      </label>
      <p>{errors?.title?.message}</p>
      <label>
        <span>Body</span>
        <input
          {...register("body", {
            required: {
              value: true,
              message: "body is required",
            },
          })}
        />
      </label>
      <p>{errors?.body?.message}</p>
      <button type="submit">Send form</button>
    </form>
  );
}
