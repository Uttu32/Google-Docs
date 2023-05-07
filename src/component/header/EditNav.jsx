import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { BiUndo } from "react-icons/bi";
import { BiRedo } from "react-icons/bi";
import { BiCut } from "react-icons/bi";
import { AiOutlineCopy} from "react-icons/ai";
import {MdContentPaste } from "react-icons/md";
import { MdContentPasteGo } from "react-icons/md";
import { MdSelectAll } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import { RiFindReplaceLine } from "react-icons/ri";


export default function EditNav() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{fontSize:"0.875rem", padding:"0px",width:"fit-content", height:"1.2rem"}}
      >
       Edit
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          {" "}
          <BiUndo /> Undo
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <BiRedo /> Redo{" "}
        </MenuItem>
    
        <MenuItem onClick={handleClose}>
          {" "}
          <BiCut/> Cut
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <AiOutlineCopy /> Copy
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <MdContentPaste /> Paste
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <MdContentPasteGo /> Paste without format
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <MdSelectAll /> Select all
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <BsTrash /> Delete
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <RiFindReplaceLine /> Find and replace
        </MenuItem>
       
      </Menu>
    </div>
  );
}
