import React, { Component } from "react";
import Rects from "./rects";
import Menu from "./menu";
import DrawerCon from "../DrawerCon";
export const searchingAlgorithmsData = [
    {
        name: "linear",
        title: "Linear Search",
        description:
            "Linear search, also known as sequential search, is a simple search algorithm that checks each element in the list until the desired element is found or the end of the list is reached. It sequentially checks each element of the list until a match is found or the whole list has been searched.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        bestCase: "O(1)",
        worstCase: "O(n)",
        averageCase: "O(n/2)",
        stable: true,
        adaptive: false,
        inPlace: true
    },
    {
        name: "binary",
        title: "Binary Search",
        description:
            "Binary search is a fast search algorithm with logarithmic time complexity. It works on sorted arrays by repeatedly dividing the search interval in half. The algorithm compares the target value to the middle element of the array. If the target value matches the middle element, its position in the array is returned. If the target value is less than the middle element, the search continues in the lower half of the array; if the target value is greater, it continues in the upper half.",
        timeComplexity: "O(log n)",
        spaceComplexity: "O(1)",
        bestCase: "O(1)",
        worstCase: "O(log n)",
        averageCase: "O(log n)",
        stable: true,
        adaptive: false,
        inPlace: true
    }
];


class Sort extends Component {
    state = {
        count: 20,
        rects: [],
        speed: 760 - 25 * 7.5,
        isRunning: false,
        algo1: 0,
        open: false,
        num: null,
        foundAt: 0,
        resultFound: false,
        resultNotFound: false
    };

    passElement = (element) => {
        this.state.num = element;
    }

    componentDidMount() {
        this.handleRandomize();
    }

    linearSearch = async () => {
        let n = this.state.rects.length;
        for (let i = 0; i < n; i++) {
            const updatedRects = this.state.rects.map((rect, index) => {
                return {
                    ...rect,
                    isSorted: index <= i,
                    isSorting: index === i,
                    isChecked: index < i,
                    isFound: parseInt(rect.width) === parseInt(this.state.num) && index === i,
                };
            });

            this.setState({ rects: updatedRects });
            await sleep(this.state.speed);

            if (parseInt(this.state.rects[i].width) === parseInt(this.state.num)) {
                this.setState({ foundAt: i });
                this.setState({ resultFound: true });
                this.setState({ isRunning: false });
                return;
            }
        }
        this.setState({ resultNotFound: true })
        this.setState({ isRunning: false })
    }

    binarySearch = async () => {
        let left = 0;
        let right = this.state.rects.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            const updatedRects = this.state.rects.map((rect, index) => {
                return {
                    ...rect,
                    isSorted: index < left || index > right,
                    isSorting: index === mid,
                    isChecked: index >= left && index <= right,
                    isFound: parseInt(rect.width) === parseInt(this.state.num) && index === mid,
                };
            });

            this.setState({ rects: updatedRects });
            await sleep(this.state.speed);

            if (parseInt(this.state.rects[mid].width) === parseInt(this.state.num)) {
                this.setState({ foundAt: mid });
                this.setState({ resultFound: true });
                this.setState({ isRunning: false });
                return;
            } else if (parseInt(this.state.rects[mid].width) < parseInt(this.state.num)) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        this.setState({ resultNotFound: true });
        this.setState({ isRunning: false });
    }



    render() {
        return (
            <React.Fragment>
                <DrawerCon>
                    <Menu
                        disable={this.state.isRunning}
                        onViusalize={this.handleSort}
                        onRandomize={this.handleRandomize}
                        onRefresh={this.handleRefresh}
                        onCountChange={this.handleCountChange}
                        onAlgoChanged={this.handleAlgoChanged}
                        onSpeedChange={this.handleSpeedChanged}
                        passElement={this.passElement}
                    />
                </DrawerCon>
                <div className="flex flex-col items-center justify-center gap-5 mt-16">
                    {this.state.resultFound &&
                        <span className="text-xl text-green-600 font-bold text-center">
                            Number found at position {this.state.foundAt + 1}
                        </span>
                    }
                    {this.state.resultNotFound &&
                        <span className="text-xl text-red-500 font-bold text-center">
                            Number Not Found!
                        </span>
                    }
                    <Rects speed={this.state.speed} rects={this.state.rects} />
                    <div>

                        <div className="flex flex-col w-full text-gray-900 p-4 rounded border border-system-wite bg-opacity-10 gap-6">
                            <div className="flex flex-col items-start justify-start w-3/4">
                                <h3 className="text-xl">
                                    {searchingAlgorithmsData[this.state.algo1].title}
                                </h3>
                                <p className="text-sm text-grey-500 pt-2">
                                    {searchingAlgorithmsData[this.state.algo1].description}
                                </p>
                            </div>

                            <div className="flex flex-col items-start justify-start w-1/4 gap-2">
                                <h3 className="text-lg">Time Complexity</h3>
                                <div className="flex flex-col gap-2">
                                    <p className="flex w-full text-sm">
                                        <span className="w-28">Worst Case:</span>
                                        <span>
                                            {searchingAlgorithmsData[this.state.algo1].worstCase}
                                        </span>
                                    </p>
                                    <p className="flex w-full text-sm">
                                        <span className="w-28">Average Case:</span>
                                        <span>
                                            {searchingAlgorithmsData[this.state.algo1].averageCase}
                                        </span>
                                    </p>
                                    <p className="flex w-full text-sm">
                                        <span className="w-28">Best Case:</span>
                                        <span>
                                            {searchingAlgorithmsData[this.state.algo1].bestCase}
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col items-start justify-start w-1/4 gap-2">
                                <h3 className="text-lg">Properties</h3>
                                <div className="flex flex-col gap-2">
                                    <p className="flex w-full text-sm">
                                        <span className="w-28">Stable:</span>
                                        <span>
                                            {searchingAlgorithmsData[this.state.algo1].stable ? 'YES' : 'NO'}
                                        </span>
                                    </p>
                                    <p className="flex w-full text-sm">
                                        <span className="w-28">Adaptive:</span>
                                        <span>
                                            {searchingAlgorithmsData[this.state.algo1].adaptive ? 'YES' : 'NO'}
                                        </span>
                                    </p>
                                    <p className="flex w-full text-sm">
                                        <span className="w-28">InPlace:</span>
                                        <span>
                                            {searchingAlgorithmsData[this.state.algo1].inPlace ? 'YES' : 'NO'}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </React.Fragment>
        );
    }

    handleClickOpen = () => {
        this.setState({ open: !this.state.open });
    };


    handleRandomize = () => {
        const rect = getInitialRects(this.state.count);
        this.setState({ rects: rect });
        this.setState({ resultFound: false })
        this.setState({ resultNotFound: false })
    };

    handleCountChange = (val) => {
        this.setState({ count: val });
        this.handleRandomize();
    };

    handleAlgoChanged = (pos, val) => {
        if (pos === 0) {
            this.setState({ algo1: val });
        }
    };
    handleSpeedChanged = (val) => {
        const speed = 760 - val * 7.5;
        this.setState({ speed });
    };
    handleSort = () => {
        if (this.state.num === null) {
            alert("Please insert a number to search");
            return;
        }
        this.setState({ resultFound: false });
        this.setState({ resultNotFound: false })
        this.setState({ isRunning: true });
        switch (this.state.algo1) {
            case 0:
                this.linearSearch();
                break;
            case 1:
                this.binarySearch();
                break;
            default:
                this.linearSearch(this.state.rects, this.state.element)
                break;
        }
    };
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const getInitialRects = (tot) => {
    const rects = [];
    let prevWidth = 0;
    for (let i = 0; i < tot; i++) {
        const width = prevWidth + Math.floor(Math.random() * 10) + 20;
        rects.push(getRect(i, width));
        prevWidth = width - 19;
    }
    return rects;
};

const getRect = (kk, width) => {
    return {
        width: width,
        isSorted: false,
        isSorting: false,
        kk: kk,
    };
};

export default Sort;
