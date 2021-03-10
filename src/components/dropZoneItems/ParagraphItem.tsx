import React from "react";
import DropZoneItem, { IDropZoneItem } from "../DropZoneItem";
import TextUpdateWrapper from "../TextUpdateWrapper";

const ParagraphItem: React.FC<IDropZoneItem> = function ({
  id,
  deleteItem,
  updateValue,
  updateItem,
  text = "Default",
}) {
  return (
    <DropZoneItem id={id} updateItem={updateItem} deleteItem={deleteItem}>
      <TextUpdateWrapper id={id} text={text} updateValue={updateValue}>
        <p>{text}</p>
      </TextUpdateWrapper>
    </DropZoneItem>
  );
};

export default ParagraphItem;
