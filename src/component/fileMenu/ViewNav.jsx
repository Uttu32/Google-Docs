import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import {MdOutlineModeEdit } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { BiFullscreen} from "react-icons/bi";



export default function ViewNav() {
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
      >
       View
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
          <MdOutlineModeEdit /> Mode
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <TiTick  /> Show print layout{" "}
        </MenuItem>
    
        <MenuItem onClick={handleClose}>
          {" "}
          <TiTick  />  Show ruler
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <TiTick  />  Show outline
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
           Show equation toolbar
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
           Show non-printing characters
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <TiTick  />  Show comments
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <BiFullscreen /> Full screen
        </MenuItem>
       
       
      </Menu>
    </div>
  );
}
