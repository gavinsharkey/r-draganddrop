import React from "react";
import { DropZoneStateItem } from "../App";

export interface IDropZoneItem {
  id: number;
  updateValue: (id: number, text: string) => void;
  updateItem: (item: DropZoneStateItem) => void;
  deleteItem: (id: number) => void;
  text?: string;
}

type IDropZoneItemProps = Omit<IDropZoneItem, "updateValue">;

const DropZoneItem: React.FC<IDropZoneItemProps> = function ({
  id,
  updateItem,
  deleteItem,
  children,
}) {
  const [isDraggedOver, setIsDraggedOver] = React.useState(false);

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    setIsDraggedOver(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    setIsDraggedOver(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const data: DropZoneStateItem = JSON.parse(
      e.dataTransfer.getData("application/json")
    );

    updateItem({
      ...data,
      id,
    });

    setIsDraggedOver(false);
  };

  return (
    <div
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className="drop-zone-item"
      style={{
        outline: isDraggedOver ? "1px solid #999" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div className="close" onClick={() => deleteItem(id)}>
        <button type="button" className="btn-close"></button>
      </div>
      {children}
    </div>
  );
};

export default DropZoneItem;
