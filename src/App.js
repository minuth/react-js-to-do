import React, { useState } from "react";
import Item from "./Item";
import "./style.css";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isEditting, setEditting] = useState(false);

  const add = event => {
    if (event.key == "Enter") {
      if (todo != "") {
        if (!isEditting) {
          if (todoList.includes(todo)) {
            alert("Item aleady existed!!!");
          } else {
            setTodoList([...todoList, todo]);
          }
        } else {
          setEditting(false);
          todoList[selectedIndex] = todo;
        }
        setTodo("");
      } else {
        alert("Item cannot empty!!!");
      }
    }
  };

  const remove = itemToRemove => {
    setTodoList(todoList.filter(item => item != itemToRemove.text));
  };

  const edit = itemToEdit => {
    setEditting(true);
    setSelectedIndex(todoList.findIndex(item => item == itemToEdit.text));
    setTodo(itemToEdit.text);
  };

  return (
    <div>
      <h1>TO DO LIST</h1>
      <input
        value={todo}
        onChange={e => setTodo(e.target.value)}
        type="text"
        placeholder="what to do?"
        onKeyDown={add}
      />

      {todoList.map((item, index) => (
        <Item
          item={{ text: item, index: index }}
          onRemove={remove}
          onEdit={edit}
        />
      ))}
    </div>
  );
}
