import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { v4 } from "uuid";
import CustomTable from "./components/tables/CustomTable";
import EditItemTable from "./components/forms/EditItemTable";
import AddItemTable from "./components/forms/AddItemTable";

const App = () => {
  const [items, setitems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );
  const [editing, setEditing] = useState(false);

  const [currentItem, setCurrentItem] = useState();

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
    setCurrentItem({ id: null, text: "" });
  }, [items]);

  const addItem = (item) => {
    item.id = v4();
    setitems([...items, item]);
  };

  const deleteItem = (id) => {
    setEditing(false);
    setitems(items.filter((item) => item.id !== id));
  };

  const updateItem = (id, text) => {
    const editItem = {
      id,
      text,
    };

    setEditing(false);

    setitems(items.map((item) => (item.id === id ? editItem : item)));
  };

  const editRow = (item) => {
    setEditing(true);

    setCurrentItem({ id: item.id, text: item.text });
  };

  return (
    <Container>
      <CustomTable items={items} editRow={editRow} deleteItem={deleteItem} />
      {editing ? (
        <div>
          <EditItemTable
            setEditing={setEditing}
            currentItem={currentItem}
            updateItem={updateItem}
          />
        </div>
      ) : (
        <div>
          <AddItemTable addItem={addItem} />
        </div>
      )}
    </Container>
  );
};

export default App;
