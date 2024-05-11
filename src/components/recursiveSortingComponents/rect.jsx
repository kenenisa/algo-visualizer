import React, { Component } from "react";
import "./style.css";
class Rect extends Component {
  render() {
    return (
      <div
        className="rect"
        style={{
          height: this.props.rect.width,
          border: this.checkBorder(),
          background: this.checkColor(),
          margin: this.props.marg,
          verticalAlign: "middle",
          width: this.props.wid,
        }}
      ></div>
    );
  }
  checkColor = () => {
    if (this.props.rect.isSorted) {
      return "rgb(21 128 61)";
    } else if (this.props.rect.isSorting) {
      return "rgb(245 158 11)";
    } else if (this.props.rect.isChecked) {
      return 'black';
    } else if (this.props.rect.isRight) {
      return 'rgb(2 132 199)';
    } else {
      return "rgb(190 24 93)"
    }
  }
  checkBorder = () => {
    if (this.props.rect.isRange) {
      return "0px solid black";
    } else {
      return "0px";
    }
  };
}

export default Rect;
