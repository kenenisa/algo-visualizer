import React, { Component } from "react";
import DiscreteSlider from "./slider";
import SimpleSelect from "./simpleSelect";
import { Link } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import { Button, Input, TextField } from '@mui/material';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { element: null };
    }

    render() {
        return (
            <div className="flex flex-col justify-center items-center gap-10 py-2">

                <div className="flex flex-col">
                    <SimpleSelect
                        pos={0}
                        onAlgoChanged={this.props.onAlgoChanged}
                        onRandomize={this.props.onRandomize}
                        disable={this.props.disable}
                    />
                </div>
                <TextField
                    variant="outlined"
                    placeholder="Enter a value"
                    onChange={this.handleChange} />

                <DiscreteSlider
                    default={20}
                    min={10}
                    max={100}
                    step={10}
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

    handleChange = (e) => {
        this.state.element = e.target.value
        this.props.passElement(this.state.element);
    }

}

export default Menu;
