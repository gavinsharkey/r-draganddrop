import { Component } from "react";
import { DropZoneStateItem } from "../App";
import FormItem from "./dropZoneItems/FormItem";
import HeaderItem from "./dropZoneItems/HeaderItem";
import ParagraphItem from "./dropZoneItems/ParagraphItem";

interface DropZoneProps {
  dropItems: DropZoneStateItem[];
  addItem: (item: DropZoneStateItem) => void;
  updateValue: (id: number, text: string) => void;
  updateItem: (item: DropZoneStateItem) => void;
  deleteItem: (id: number) => void;
}

const items = {
  form: FormItem,
  header: HeaderItem,
  paragraph: ParagraphItem,
};

class DropZone extends Component<DropZoneProps> {
  getItems() {
    return this.props.dropItems.map((item) => {
      const Item = items[item.component];
      return (
        <Item
          key={item.id}
          id={item.id}
          text={item.text}
          updateValue={this.props.updateValue}
          updateItem={this.props.updateItem}
          deleteItem={this.props.deleteItem}
        />
      );
    });
  }

  handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    e.dataTransfer.dropEffect = "copy";
  };

  handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const data: DropZoneStateItem = JSON.parse(
      e.dataTransfer.getData("application/json")
    );

    this.props.addItem(data);
  };

  render() {
    return (
      <div
        onDragOver={this.handleDragOver}
        onDrop={this.handleDrop}
        className="dropzone"
      >
        {this.getItems()}
        <div className="drop-zone-item empty">
          <span>Drag Item Here</span>
        </div>
      </div>
    );
  }
}

export default DropZone;
