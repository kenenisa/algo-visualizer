import React, { Component } from 'react';
import './style.css';
class Rect extends Component {

    render() {
        return (
            <div
                className='rect'
                style={{
                    height: this.props.rect.width,
                    background: this.checkColor(),
                    margin: this.props.marg,
                    // float:'left',
                    verticalAlign: 'middle',
                    width: this.props.wid
                }}
            >

            </div>
        );
    }
    checkColor = () => {
        if (this.props.rect.isSorted) {
            return "rgb(21 128 61)";
        } else if (this.props.rect.isSorting) {
            return "rgb(245 158 11)";
        } else {
            return "rgb(190 24 93)"
        }
    }
}

export default Rect;