import React from "react";
import DropListItem from "./DropListItem";

const DropList: React.FC = function () {
  return (
    <div className="items">
      <DropListItem component="form" displayName="Form" />
      <DropListItem component="header" displayName="Header" />
      <DropListItem component="paragraph" displayName="Paragraph" />
    </div>
  );
};

export default DropList;
