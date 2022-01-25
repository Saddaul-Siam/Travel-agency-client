import React from "react";
import { Container } from "@mui/material";
import { useForm } from "react-hook-form";

const AddExperience = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Container>
      <h2>Add your own experience</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Please Name"
          {...register("name", { required: true })}
        />
        <input {...register("location", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
        <input
          type="date"
          name=""
          id=""
          {...register("date", { required: true })}
        />
        <input {...register("cost", { required: true })} />
        <select {...register("rating", { required: true })}>
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
        </select>
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          {...register("description", { required: true })}
        ></textarea>
        <input type="submit" />
      </form>
    </Container>
  );
};

export default AddExperience;
