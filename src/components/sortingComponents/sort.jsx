import React, { Component } from "react";
import Rects from "./rects";
import {
  bubbleSort,
  selectionSort,
  insertionSort,
} from "../../algorithms/sortingAlgorithms";
import { quickSort } from "../../algorithms/quickSort";
import Menu from "./menu";
import AlgoInfo from "../AlgoInfo";
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import Algos from "../../assets/data.json";

import DrawerCon from "../DrawerCon";


export const sortingAlgorithmsData = [
  {
    name: "bubble",
    title: "Bubble Sort",
    description:
      "A simple comparison-based sorting algorithm. Bubble sort repeatedly compares and swaps adjacent elements if they are in the wrong order, moving larger elements towards the end with each pass through the list. This process continues until the list is sorted and no more swaps are needed.",
    worstCase: "O(n²)",
    averageCase: "O(n²)",
    bestCase: "O(n)",
    stable: true,
    adaptive: true,
    inPlace: true
  },
  {
    name: "insertion",
    title: "Insertion Sort",
    description:
      "Insertion sort builds the final sorted array one element at a time, by repeatedly taking the next unsorted element and inserting it into its correct position among the previously sorted elements. This process continues until all elements have been inserted into their proper place, resulting in a sorted list.",
    worstCase: "O(n²)",
    averageCase: "O(n²)",
    bestCase: "O(n)",
    stable: true,
    adaptive: true,
    inPlace: true
  },
  {
    name: "selection",
    title: "Selection Sort",
    description:
      "Selection sort works by repeatedly finding the minimum element from the unsorted portion of the list and swapping it with the element at the current position. This process is continued for each position in the list, moving the boundary of the sorted and unsorted portions one element forward each time until the entire list is sorted.",
    worstCase: "O(n²)",
    averageCase: "O(n²)",
    bestCase: "O(n²)",
    stable: false,
    adaptive: false,
    inPlace: true
  },

  {
    name: "quick",
    title: "Quick Sort",
    description:
      "Quick sort selects a 'pivot' element from the array and partitions the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively, and the sorted sub-arrays are combined with the pivot to form the sorted array.",
    worstCase: "O(n²)",
    averageCase: "O(n log n)",
    bestCase: "O(n log n)",
    stable: false,
    adaptive: false,
    inPlace: true
  },
  {
    name: "merge",
    title: "Merge Sort",
    description:
      "Merge sort divides the unsorted list into n sublists, each containing one element (a list of one element is considered sorted), and then repeatedly merges these sublists to produce new sorted sublists until there is only one sublist remaining, which is the sorted list. This algorithm uses a divide-and-conquer approach, splitting the list in half recursively and merging the sorted halves back together.",
    worstCase: "O(n log n)",
    averageCase: "O(n log n)",
    bestCase: "O(n log n)",
    stable: true,
    adaptive: false,
    inPlace: false
  },
  {
    name: "heap",
    title: "Heap Sort",
    description:
      "Heap sort is a comparison-based sorting algorithm. It transforms the input array into a heap, a specialized binary tree. It then repeatedly extracts the maximum (for ascending order) or minimum (for descending order) element from the heap and reconstructs the heap until the original array is sorted. Heap sort has a time complexity of O(n log n) in the worst, average, and best cases.",
    worstCase: "O(n log n)",
    averageCase: "O(n log n)",
    bestCase: "O(n log n)",
    stable: false,
    adaptive: false,
    inPlace: true
  }
];

class Sort extends Component {
  constructor() {
    super();
    this.state = {
      count: 35,
      rects: [],
      rects2: [],
      doubles: false,
      speed: 760 - 25 * 7.5,
      isRunning: false,
      isRunning1: false,
      isRunning2: false,
      algo1: 0,
      algo2: 0,
      open: false,
      open2: false,
    };
  }

  componentDidMount() {
    const rect = getInitialRects(this.state.count);
    const rect2 = rect.slice();
    this.setState({ rects: rect, rects2: rect2 });
  }

  render() {


    return (
      <React.Fragment>

        <DrawerCon>
          <Menu
            disable={this.state.isRunning}
            onDoubleChange={this.handleDouble}
            onViusalize={this.handleSort}
            onRandomize={this.handleRandomize}
            onRefresh={this.handleRefresh}
            onCountChange={this.handleCountChange}
            onAlgoChanged={this.handleAlgoChanged}
            onSpeedChange={this.handleSpeedChanged}
          />
        </DrawerCon>
        <div className="flex flex-col items-center justify-center gap-5">
          <Rects speed={this.state.speed} rects={this.state.rects} />
          <div className="flex gap-5">
            <div className="flex flex-col w-full text-gray-900 p-4 rounded border border-system-wite gap-6">
              <div className="flex flex-col items-start justify-start w-3/4">
                <h3 className="text-xl">
                  {sortingAlgorithmsData[this.state.algo1].title}
                </h3>
                <p className="text-sm text-grey-900 pt-2">
                  {sortingAlgorithmsData[this.state.algo1].description}
                </p>
              </div>

              <div className="flex flex-col items-start justify-start w-1/4 gap-2">
                <h3 className="text-lg">Time Complexity</h3>
                <div className="flex flex-col gap-2">
                  <p className="flex w-full text-sm">
                    <span className="w-28">Worst Case:</span>
                    <span>
                      {sortingAlgorithmsData[this.state.algo1].worstCase}
                    </span>
                  </p>
                  <p className="flex w-full text-sm">
                    <span className="w-28">Average Case:</span>
                    <span>
                      {sortingAlgorithmsData[this.state.algo1].averageCase}
                    </span>
                  </p>
                  <p className="flex w-full text-sm">
                    <span className="w-28">Best Case:</span>
                    <span>
                      {sortingAlgorithmsData[this.state.algo1].bestCase}
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
                      {sortingAlgorithmsData[this.state.algo1].stable ? 'YES' : 'NO'}
                    </span>
                  </p>
                  <p className="flex w-full text-sm">
                    <span className="w-28">Adaptive:</span>
                    <span>
                      {sortingAlgorithmsData[this.state.algo1].adaptive ? 'YES' : 'NO'}
                    </span>
                  </p>
                  <p className="flex w-full text-sm">
                    <span className="w-28">InPlace:</span>
                    <span>
                      {sortingAlgorithmsData[this.state.algo1].inPlace ? 'YES' : 'NO'}
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

  handleClickOpen2 = () => {
    this.setState({ open2: !this.state.open2 });
  };

  handleRandomize = () => {
    const rect = getInitialRects(this.state.count);
    const rect2 = rect.slice();
    this.setState({ rects: rect, rects2: rect2 });
  };

  // handleRefresh = () => {
  //   const rects = this.state.rects;
  //   for (let i = 0; i < rects.length; i++) {
  //     const rect = { ...rects[i], isSorted: false, isSorting: false };
  //     rects[i] = rect;
  //   }
  //   const rects2 = rects.slice();
  //   this.setState({ rects, rects2 });
  // };

  handleDouble = (val) => {
    this.setState({ doubles: val });
  };

  handleCountChange = (val) => {
    this.setState({ count: val });
    this.handleRandomize();
  };

  handleAlgoChanged = (pos, val) => {
    if (pos === 0) {
      this.setState({ algo1: val });
    } else {
      this.setState({ algo2: val });
    }
  };
  handleSpeedChanged = (val) => {
    const speed = 760 - val * 7.5;
    this.setState({ speed });
  };
  handleSort = () => {
    this.setState({ isRunning: true });
    let steps1;
    console.log(this.state);
    switch (this.state.algo1) {
      case 0:
        steps1 = bubbleSort(this.state.rects);
        break;
      case 1:
        console.log("BRROOOOOO");
        steps1 = selectionSort(this.state.rects);
        break;
      case 2:
        steps1 = insertionSort(this.state.rects);
        break;
      case 3:
        steps1 = quickSort(this.state.rects2);
        console.log(steps1);
        break;

      default:
        steps1 = bubbleSort(this.state.rects);
        break;
    }
    let steps2;
    if (this.state.doubles) {
      switch (this.state.algo2) {
        case 0:
          steps2 = bubbleSort(this.state.rects2);
          break;
        case 1:
          steps2 = selectionSort(this.state.rects2);
          break;
        case 2:
          steps2 = insertionSort(this.state.rects2);
          break;
        case 3:
          steps2 = quickSort(this.state.rects2);
          break;
        default:
          steps2 = bubbleSort(this.state.rects2);
          break;
      }
    }
    this.handleFirst(steps1);
    if (this.state.doubles) this.handleSecond(steps2);
  };
  handleFirst = async (steps) => {
    this.setState({ isRunning1: true });

    // const steps = bubbleSort(this.state.rects);
    //  console.log(steps.length);
    const prevRect = this.state.rects;
    for (let i = 0; i < steps.length; i++) {
      //   setTimeout(()=>{
      if (i !== 0) {
        prevRect[steps[i - 1].xx] = {
          ...prevRect[steps[i - 1].xx],
          isSorting: false,
        };
        prevRect[steps[i - 1].yy] = {
          ...prevRect[steps[i - 1].yy],
          isSorting: false,
        };
      }
      if (steps[i].xx === steps[i].yy) {
        prevRect[steps[i].xx] = {
          ...prevRect[steps[i].xx],
          isSorted: true,
          isSorting: false,
        };
      } else if (steps[i].changed) {
        const recti = { ...prevRect[steps[i].xx], isSorting: true };
        const rectj = { ...prevRect[steps[i].yy], isSorting: true };
        prevRect[steps[i].yy] = recti;
        prevRect[steps[i].xx] = rectj;
      } else {
        prevRect[steps[i].xx] = { ...prevRect[steps[i].xx], isSorting: true };
        prevRect[steps[i].yy] = { ...prevRect[steps[i].yy], isSorting: true };
      }
      if (i === steps.length - 1) {
        this.setState({ isRunning1: false });
        if (this.state.isRunning2 === false) {
          this.setState({ isRunning: false });
        }
      }
      /* if( i === (steps.length)-2 ){
                  this.setState({isRunning1:false});
                  if( this.state.isRunning2 === false ){
                      this.setState({isRunning:false});
                  }
                  prevRect[steps[i].xx] = {...prevRect[steps[i].xx],isSorting:false,isSorted:true};
                  prevRect[steps[i].yy] = {...prevRect[steps[i].yy],isSorting:false,isSorted:true};
              }*/
      this.setState({ rects: prevRect });
      await sleep(this.state.speed);
      // },i*speed);
    }
  };
  handleSecond = async (steps) => {
    this.setState({ isRunning2: true });
    const prevRect = this.state.rects2;
    for (let i = 0; i < steps.length; i++) {
      //   setTimeout(()=>{
      if (i !== 0) {
        prevRect[steps[i - 1].xx] = {
          ...prevRect[steps[i - 1].xx],
          isSorting: false,
        };
        prevRect[steps[i - 1].yy] = {
          ...prevRect[steps[i - 1].yy],
          isSorting: false,
        };
      }
      if (steps[i].xx === steps[i].yy) {
        prevRect[steps[i].xx] = {
          ...prevRect[steps[i].xx],
          isSorted: true,
          isSorting: false,
        };
      } else if (steps[i].changed) {
        const recti = { ...prevRect[steps[i].xx], isSorting: true };
        const rectj = { ...prevRect[steps[i].yy], isSorting: true };
        prevRect[steps[i].yy] = recti;
        prevRect[steps[i].xx] = rectj;
      } else {
        prevRect[steps[i].xx] = { ...prevRect[steps[i].xx], isSorting: true };
        prevRect[steps[i].yy] = { ...prevRect[steps[i].yy], isSorting: true };
      }
      if (i === steps.length - 1) {
        this.setState({ isRunning2: false });
        if (this.state.isRunning1 === false) {
          this.setState({ isRunning: false });
        }
      }
      /* if( i === (steps.length)-2 ){
                    prevRect[steps[i].xx] = {...prevRect[steps[i].xx],isSorting:false,isSorted:true};
                    prevRect[steps[i].yy] = {...prevRect[steps[i].yy],isSorting:false,isSorted:true};
                    this.setState({isRunning2:false});
                    if( this.state.isRunning1 === false ){
                        this.setState({isRunning:false});
                    }
                }*/
      this.setState({ rects2: prevRect });
      await sleep(this.state.speed);
      // },i*speed);
    }
  };
  handleHeap = async (steps) => {
    this.setState({ isRunning: true });
    let prevRect = this.state.rects;
    for (let j = 0; j < this.state.count; j++) {
      prevRect[j] = {
        ...prevRect[j],
        isLeft: false,
        isSorting: false,
        isRight: false,
        isRange: false,
        isSorted: false,
      };
    }
    this.setState({ rects: prevRect });

    for (let i = 0; i < steps.length; i++) {
      let step = steps[i];
      //   console.log(step);
      for (let i = 0; i < this.state.count; i++) {
        prevRect[i] = {
          ...prevRect[i],
          isLeft: false,
          isSorting: false,
          isRight: false,
        };
      }
      let { left, right, sorted } = step;
      prevRect[left] = { ...prevRect[left], isLeft: true };
      prevRect[right] = { ...prevRect[right], isRight: true };
      this.setState({ rects: prevRect });
      await sleep(this.state.speed);
      let temp = prevRect[left];
      prevRect[left] = prevRect[right];
      prevRect[right] = temp;
      this.setState({ rects: prevRect });
      if (sorted) prevRect[left] = { ...prevRect[left], isSorted: true };
      await sleep(this.state.speed);
      await sleep(this.state.speed);
      await sleep(this.state.speed);
      if (i === steps.length - 1) {
        for (let i = 0; i < this.state.count; i++) {
          prevRect[i] = {
            ...prevRect[i],
            isLeft: false,
            isSorting: false,
            isRight: false,
            isSorted: true,
          };
          this.setState({ rects: prevRect });
          await sleep(this.state.speed);
        }
        this.setState({ isRunning: false, rects: prevRect });
      }
    }
  };
  handleMerge = async (steps) => {
    this.setState({ isRunning1: true });

    const { speed } = this.state;

    let prevRect = this.state.rects;
    for (let j = 0; j < this.state.count; j++) {
      prevRect[j] = {
        ...prevRect[j],
        isLeft: false,
        isSorting: false,
        isRight: false,
        isRange: false,
        isSorted: false,
      };
    }
    this.setState({ rects: prevRect });
    await sleep(this.state.speed);
    //  console.log("steps ", steps.length);
    for (let ii = 0; ii < steps.length; ii++) {
      let step = steps[ii];
      for (let i = 0; i < this.state.count; i++) {
        prevRect[i] = {
          ...prevRect[i],
          isLeft: false,
          isSorting: false,
          isRight: false,
        };
      }
      // console.log(step.left," ",step.mid," ",step.right);
      for (let i = step.left; i <= step.mid; i++) {
        prevRect[i] = { ...prevRect[i], isLeft: true, isSorting: false };
      }
      for (let i = step.mid + 1; i <= step.right; i++) {
        prevRect[i] = {
          ...prevRect[i],
          isRight: true,
          isLeft: false,
          isSorting: false,
        };
      }
      this.setState({ rects: prevRect });
      await sleep(this.state.speed);
      await sleep(this.state.speed);
      await sleep(this.state.speed);
      //  console.log(step);
      for (let i = step.left; i <= step.right; i++) {
        prevRect[i] = {
          ...prevRect[i],
          width: step.val[i - step.left].width,
          isSorting: true,
        };
        this.setState({ rects: prevRect });
        await sleep(this.state.speed);
      }

      if (ii === steps.length - 1) {
        for (let i = 0; i < this.state.count; i++) {
          prevRect[i] = {
            ...prevRect[i],
            isLeft: false,
            isSorting: false,
            isRight: false,
            isSorted: true,
          };
          this.setState({ rects: prevRect });
          await sleep(this.state.speed);
        }
        this.setState({ isRunning: false });
      }

      this.setState({ rects: prevRect });
      await sleep(this.state.speed);
      prevRect = this.state.rects;
      /*  for (let i = 0; i < this.state.count; i++) {
                prevRect[i] = {...prevRect[i], isLeft: false,isSorting: false,isRight:false,isSorted: false};
            }*/
      this.setState({ rects: prevRect });
    }
  };
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const getInitialRects = (tot) => {
  const rects = [];
  for (let i = 0; i < tot; i++) {
    rects.push(getRect(i));
  }
  return rects;
};
const getRect = (kk) => {
  return {
    width: Math.floor(Math.random() * 200) + 50,
    isSorted: false,
    isSorting: false,
    kk: kk,
  };
};
export default Sort;
