import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const EditItemTable = ({ setEditing, currentItem, updateItem }) => {
  const [item, setItem] = useState(currentItem);

  useEffect(() => {
    setItem(currentItem);
  }, [currentItem]);
  const { handleSubmit, register, watch } = useForm();

  const onSubmit = (data, e) => {
    if (!data.text) return;
    updateItem(item.id, data.text);
    e.target.reset();
  };

  return (
    <Form inline onSubmit={handleSubmit(onSubmit)}>
      <Form.Control
        {...register("text")}
        defaultValue={item.text}
        onChange={() => watch("text")}
        className="mb-2 mr-sm-2"
      />

      <Button type="submit" className="mb-2">
        Изменить
      </Button>
      <Button
        className="mb-2"
        style={{ marginLeft: 3 }}
        onClick={() => setEditing(false)}
      >
        Отменить
      </Button>
    </Form>
  );
};

export default EditItemTable;
