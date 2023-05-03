import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {BiBold} from 'react-icons/bi';
import {ImParagraphJustify} from 'react-icons/im';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';
import FormatLineSpacingIcon from '@mui/icons-material/FormatLineSpacing';
import {TbColumns} from "react-icons/tb";
import {VscListUnordered} from 'react-icons/vsc';
import {VscSplitVertical} from 'react-icons/vsc';
import {HiHashtag} from 'react-icons/hi';
import {TbBrandPagekit} from 'react-icons/tb';
import {RiTableLine} from 'react-icons/ri';
import {BsImage} from 'react-icons/bs';
import {AiOutlineLine} from 'react-icons/ai';
import {RiFormatClear} from 'react-icons/ri';

export default function Format() {
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
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Format
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><BiBold /> Text</MenuItem>
        <MenuItem onClick={handleClose}><ImParagraphJustify/>Paragraph Styles</MenuItem>
        <MenuItem onClick={handleClose}><FormatIndentIncreaseIcon /> Align & Indent</MenuItem>
        <MenuItem onClick={handleClose}><FormatLineSpacingIcon/>Line & Paragraph Spacing</MenuItem>
        <MenuItem onClick={handleClose}><TbColumns/> Columns</MenuItem>
        <MenuItem onClick={handleClose}><VscListUnordered/>Bullets & Numbering</MenuItem>
        <hr />
        <MenuItem onClick={handleClose}><VscSplitVertical/>Header & Footer</MenuItem>
        <MenuItem onClick={handleClose}><HiHashtag/>Page numbers </MenuItem>
        <MenuItem onClick={handleClose}><TbBrandPagekit/>Page Orientation</MenuItem>
        <hr />
        <MenuItem onClick={handleClose}><RiTableLine/>Table</MenuItem>
        <MenuItem onClick={handleClose}><BsImage/>Image</MenuItem>
        <MenuItem onClick={handleClose}><AiOutlineLine/>Border & Lines</MenuItem>
        <hr />
        <MenuItem onClick={handleClose}><RiFormatClear/>Clear Formatting</MenuItem>
      </Menu>
    </div>
  );
}