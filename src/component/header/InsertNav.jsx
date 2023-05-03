import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";


import { BiImageAlt } from "react-icons/bi";
import { MdOutlineTableChart} from "react-icons/md";
import { MdOutlineInsertChartOutlined } from "react-icons/md";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { MdOutlineArrowDropDownCircle} from "react-icons/md";
import { MdNotes } from "react-icons/md";
import { BsBuildingAdd} from "react-icons/bs";
import { FiLink2 } from "react-icons/fi";
import { BsFileBreak} from "react-icons/bs";
import {BiHash} from "react-icons/bi"
import {BiCommentDetail} from "react-icons/bi"
import {BsBookmarkDash} from "react-icons/bs"
import {MdFormatListBulleted} from "react-icons/md"





export default function InsertNav() {
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
        sx={{fontSize:"0.875rem",width:"fit-content", padding:"0px", height:"1.2rem"}}
        onClick={handleClick}
      >
        Insert
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
          <BiImageAlt /> Image
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <MdOutlineTableChart /> Table{" "}
        </MenuItem>
    
        <MenuItem onClick={handleClose}>
          {" "}
           Drawing
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <MdOutlineInsertChartOutlined/> Chart
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <MdOutlineHorizontalRule /> Horizontal line
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <BsEmojiSmile/> Emoji
        </MenuItem>
       
        <MenuItem onClick={handleClose}>
          {" "}
          <MdOutlineArrowDropDownCircle/> Dropdown
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <MdNotes/> Footnote
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <BsBuildingAdd /> Building blocks
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
           Special characters
        </MenuItem>
        <MenuItem onClick={handleClose}>
           Equation
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
         Watermark
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          
          Header & footers
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <BiHash  />
          Page numbers
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <BsFileBreak /> Break
        </MenuItem>

        <MenuItem onClick={handleClose}>
          {" "}
          <FiLink2 /> Link
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <BiCommentDetail /> Comment
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <BsBookmarkDash /> Bookmark
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
         <MdFormatListBulleted/>  Table of contents
        </MenuItem>

      </Menu>
    </div>
  );
}
