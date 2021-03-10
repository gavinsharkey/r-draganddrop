import React from "react";
import DropZoneItem, { IDropZoneItem } from "../DropZoneItem";

const FormItem: React.FC<IDropZoneItem> = function ({
  id,
  deleteItem,
  updateValue,
  updateItem,
}) {
  return (
    <DropZoneItem id={id} updateItem={updateItem} deleteItem={deleteItem}>
      <input type="text" className="form-control" />
    </DropZoneItem>
  );
};

export default FormItem;
