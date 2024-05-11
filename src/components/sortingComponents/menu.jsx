import React, { Component } from "react";
import DiscreteSlider from "./slider";
import SimpleSelect from "./simpleSelect";
import SwitchLabels from "./formControlLabel";
import { Link } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import { Box, Button, Divider } from "@mui/material";

class Menu extends Component {
  render() {
    return (

      <div className="flex flex-col justify-center items-center gap-10 py-2">


        <SimpleSelect
          pos={0}
          onAlgoChanged={this.props.onAlgoChanged}
          onRandomize={this.props.onRandomize}
          disable={this.props.disable}
        />
        <DiscreteSlider
          default={20}
          min={10}
          max={100}
          step={5}
          title="Data Size"
          onCountChange={this.props.onCountChange}
          disable={this.props.disable}
        />
        <DiscreteSlider
          default={25}
          min={10}
          max={100}
          step={1}
          title="Speed"
          onCountChange={this.props.onSpeedChange}
          disable={false}
        />

        <div>
          <Button onClick={this.props.onRandomize}
            disabled={this.props.disable} sx={{ ...this.isClickable() }}
            variant="outlined"
            fullWidth
          >
            Randomize
          </Button>
          <Button
            onClick={this.props.onViusalize}
            disabled={this.props.disable}
            sx={{ ...this.isClickable() }}
            variant="contained"
            fullWidth

          >
            Visualize
          </Button>
        </div>
      </div>
    );
  }

  isClickable = () => {
    if (this.props.disable) {
      return { cursor: "not-allowed" };
    } else {
      return {};
    }
  };
}

export default Menu;
