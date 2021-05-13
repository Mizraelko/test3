import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddItemTable = ({ addItem }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data, e) => {
    if (!data.text) return;
    addItem(data);
    reset();
  };
  return (
    <Form inline onSubmit={handleSubmit(onSubmit)}>
      <Form.Control {...register("text")} className="mb-2 mr-sm-2" />

      <Button type="submit" className="mb-2">
        Добавить
      </Button>
    </Form>
  );
};

export default AddItemTable;
