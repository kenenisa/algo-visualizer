import React, { useState } from "react";
import PreorderTraversal from "./Preorder/PreorderTraversal";
import PostorderTraversal from "./Postorder/PostorderTraversal";
import InorderTranversal from "./Inorder/InorderTranversal";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import DrawerCon from "../DrawerCon";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";
export const treeTraversalAlgorithmsData = [
  {
    name: "preorder",
    title: "Pre-order Traversal",
    description:
      "Pre-order traversal is a tree traversal algorithm that visits the root node first, followed by recursively visiting the left and right subtrees. In a pre-order traversal, each node is visited before its child nodes.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(h)",
    bestCase: "O(n)",
    worstCase: "O(n)",
    averageCase: "O(n)",
    stable: true,
    inPlace: false
  },
  {
    name: "inorder",
    title: "In-order Traversal",
    description:
      "In-order traversal is a tree traversal algorithm that visits the left subtree first, followed by the root node, and then the right subtree. In an in-order traversal, nodes are visited in ascending order of their values for a binary search tree.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(h)",
    bestCase: "O(n)",
    worstCase: "O(n)",
    averageCase: "O(n)",
    stable: true,
    inPlace: false
  },
  {
    name: "postorder",
    title: "Post-order Traversal",
    description:
      "Post-order traversal is a tree traversal algorithm that visits the left and right subtrees recursively before visiting the root node. In a post-order traversal, each node is visited after its child nodes.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(h)",
    bestCase: "O(n)",
    worstCase: "O(n)",
    averageCase: "O(n)",
    stable: true,
    inPlace: false
  }
];
const Tree = () => {
  const [traversal, setTraversal] = useState("preorder");
  const order = () => {
    if (traversal === 'preorder') return 0
    if (traversal === 'inorder') return 1
    if (traversal === 'postorder') return 2
  }
  return (

    <div>
      <DrawerCon>


        {/* <div className="flex flex-col gap-2 items-center justify-center py-5"> */}


        <ListItem disablePadding>

          <ListItemButton
            onClick={() => {
              setTraversal("preorder");
            }}>
            <ListItemText primary="Preorder Traversal" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>

          <ListItemButton
            onClick={() => {
              setTraversal("inorder");
            }}>
            <ListItemText primary="Inorder Traversal" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>

          <ListItemButton
            onClick={() => {
              setTraversal("postorder");
            }}>
            <ListItemText primary="Postorder Traversal" />
          </ListItemButton>
        </ListItem>


      </DrawerCon>
      {traversal == "preorder" && <PreorderTraversal />}
      {traversal == "postorder" && <PostorderTraversal />}
      {traversal == "inorder" && <InorderTranversal />}

      <div className="flex flex-col w-full text-gray-900 p-4 rounded border border-system-wite gap-6">
        <div className="flex flex-col items-start justify-start w-3/4">
          <h3 className="text-xl">
            {treeTraversalAlgorithmsData[order()].title}
          </h3>
          <p className="text-sm text-grey-900 pt-2">
            {treeTraversalAlgorithmsData[order()].description}
          </p>
        </div>

        <div className="flex flex-col items-start justify-start w-1/4 gap-2">
          <h3 className="text-lg">Time Complexity</h3>
          <div className="flex flex-col gap-2">
            <p className="flex w-full text-sm">
              <span className="w-28">Worst Case:</span>
              <span>
                {treeTraversalAlgorithmsData[order()].worstCase}
              </span>
            </p>
            <p className="flex w-full text-sm">
              <span className="w-28">Average Case:</span>
              <span>
                {treeTraversalAlgorithmsData[order()].averageCase}
              </span>
            </p>
            <p className="flex w-full text-sm">
              <span className="w-28">Best Case:</span>
              <span>
                {treeTraversalAlgorithmsData[order()].bestCase}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tree;
