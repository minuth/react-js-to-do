import React, { useState } from "react";

export default function Item({ item, onEdit, onRemove }) {
  const [shouldShowAction, setShowAction] = useState(false);
  const onMouseEvent = isHover => {
    setShowAction(isHover);
  };

  return (
    <div
      onMouseEnter={() => onMouseEvent(true)}
      onMouseLeave={() => onMouseEvent(false)}
    >
      <h1>{item.index + 1 + ". " + item.text}</h1>
      <div className={shouldShowAction ? "show" : "hide"}>
        <button onClick={() => onEdit(item)}>Edit</button>
        <button onClick={() => onRemove(item)}>Remove</button>
      </div>
    </div>
  );
}
