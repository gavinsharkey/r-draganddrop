import React from "react";
import { DropZoneComponent, DropZoneStateItem } from "../App";

interface IDropListItemProps {
  component: DropZoneComponent;
  displayName: string;
}

const DropListItem: React.FC<IDropListItemProps> = function ({
  component,
  displayName,
}) {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    const data: DropZoneStateItem = {
      id: Math.random(),
      component,
    };

    e.dataTransfer.setData("application/json", JSON.stringify(data));
  };

  return (
    <div draggable onDragStart={handleDragStart} className="drop-list-item">
      <span>{displayName}</span>
    </div>
  );
};

export default DropListItem;
