import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { FaCopy } from "react-icons/fa";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { MdDriveFileMoveOutline } from "react-icons/md";
import { MdAddToDrive } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import { BiHistory } from "react-icons/bi";
import { MdOutlineOfflinePin } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdOutlineLanguage } from "react-icons/md";
import DescriptionIcon from "@mui/icons-material/Description";
import { AiFillPrinter } from "react-icons/ai";

export default function FileNav() {
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
        sx={{
          fontSize: "0.875rem",
          padding: "0px",
          width: "fit-content",
          height: "1.2rem",
          paddingLeft: "0",
          minWidth:"2.5rem",
          color:"black"
        }}
      >
        File
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
          <CreateNewFolderIcon /> New
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <FolderOpenIcon /> Open{" "}
        </MenuItem>
        {/* <MenuItem onClick={handleClose}>
          {" "}
          <CiImport /> Import
        </MenuItem> */}
        <MenuItem onClick={handleClose}>
          {" "}
          <FaCopy /> Make a copy
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <BsFillPersonPlusFill /> Share
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <HiOutlineMail /> Email
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <FiDownload /> Download
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <MdOutlineDriveFileRenameOutline /> Rename
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <MdDriveFileMoveOutline /> Move
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <MdAddToDrive /> Add shortcut to Drive
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <BsTrash /> Move to trash
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <BiHistory /> Version history
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <MdOutlineOfflinePin /> Make available offline
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <AiOutlineInfoCircle /> Details
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <MdOutlineLanguage />
          Language
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <DescriptionIcon />
          Page setup
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <AiFillPrinter /> Print
        </MenuItem>
      </Menu>
    </div>
  );
}
