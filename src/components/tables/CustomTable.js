import React from "react";
import { Table, Button } from "react-bootstrap";

const CustomTable = ({ items, editRow, deleteItem }) => {
  const handleDeleteItem = (id) => {
    deleteItem(id);
  };
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Текст таблицы</th>
          <th>Изменить</th>
          <th>Удалить</th>
        </tr>
      </thead>
      <tbody>
        {items.length > 0 ? (
          items.map((item) => (
            <tr key={item.id}>
              <td>{item.text}</td>
              <td>
                <Button
                  onClick={() => {
                    editRow(item);
                  }}
                >
                  Изменить
                </Button>
              </td>
              <td>
                <Button onClick={() => handleDeleteItem(item.id)}>
                  Удалить
                </Button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td>Нет элементов</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default CustomTable;
