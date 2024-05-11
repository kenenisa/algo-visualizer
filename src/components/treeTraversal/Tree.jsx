import React, { useState } from "react";
import PreorderTraversal from "./Preorder/PreorderTraversal";
import PostorderTraversal from "./Postorder/PostorderTraversal";
import InorderTranversal from "./Inorder/InorderTranversal";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import DrawerCon from "../DrawerCon";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";

const Tree = () => {
  const [traversal, setTraversal] = useState("preorder");
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
    </div>
  );
};

export default Tree;
