import { Component } from "react";
import DropList from "./components/DropList";
import DropZone from "./components/DropZone";
import "./App.css";

export type DropZoneComponent = "form" | "header" | "paragraph";

export type DropZoneStateItem = {
  id: number;
  component: DropZoneComponent;
  text?: string;
};

type IAppState = {
  dropItems: DropZoneStateItem[];
};

class App extends Component<{}, IAppState> {
  state: IAppState = {
    dropItems: [],
  };

  addItem = (item: DropZoneStateItem) => {
    this.setState((prevState) => {
      return {
        dropItems: [...prevState.dropItems, item],
      };
    });
  };

  updateItem = (item: DropZoneStateItem) => {
    this.setState((prevState) => {
      return {
        dropItems: prevState.dropItems.map((prevItem) => {
          if (prevItem.id === item.id) {
            return item;
          } else {
            return prevItem;
          }
        }),
      };
    });
  };

  updateValue = (id: number, text: string) => {
    this.setState((prevState) => {
      return {
        dropItems: prevState.dropItems.map((prevItem) => {
          if (prevItem.id === id) {
            return {
              ...prevItem,
              text,
            };
          } else {
            return prevItem;
          }
        }),
      };
    });
  };

  deleteItem = (id: number) => {
    this.setState((prevState) => {
      return {
        dropItems: prevState.dropItems.filter((item) => item.id !== id),
      };
    });
  };

  render() {
    const { dropItems } = this.state;

    return (
      <div className="main">
        <DropList />
        <DropZone
          addItem={this.addItem}
          updateValue={this.updateValue}
          updateItem={this.updateItem}
          deleteItem={this.deleteItem}
          dropItems={dropItems}
        />
      </div>
    );
  }
}

export default App;
