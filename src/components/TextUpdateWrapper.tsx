import React, { useState } from "react";
import { IDropZoneItem } from "./DropZoneItem";

type TextUpdateWrapperProps = Pick<
  IDropZoneItem,
  "id" | "text" | "updateValue"
>;

const TextUpdateWrapper: React.FC<TextUpdateWrapperProps> = function ({
  id,
  text,
  updateValue,
  children,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(text || "");

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsEditing(true);
  };

  const handlePressEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      if (value.length) {
        updateValue(id, value);
      } else {
        setValue(text || "");
      }
      setIsEditing(false);
    }
  };

  return (
    <>
      {isEditing ? (
        <textarea
          onKeyPress={handlePressEnter}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoFocus
          className="form-control"
        />
      ) : (
        <div onClick={handleClick} className="update-wrapper">
          {children}
        </div>
      )}
    </>
  );
};

export default TextUpdateWrapper;
