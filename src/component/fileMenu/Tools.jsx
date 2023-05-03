import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {MdSpellcheck} from 'react-icons/md';
import {BsUniversalAccess} from 'react-icons/bs';
import {MdOutlineRoomPreferences} from 'react-icons/md';
import {IoIosNotificationsOutline} from 'react-icons/io';
import {MdGTranslate} from 'react-icons/md';
import {MdOutlineKeyboardVoice} from 'react-icons/md';
import {BiBookBookmark} from 'react-icons/bi';
import {MdOutlineExplore} from 'react-icons/md';
import {ImQuotesRight} from 'react-icons/im';
import {MdCompareArrows} from 'react-icons/md';

export default function Tools() {
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
        Tools
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
        <MenuItem onClick={handleClose}><MdSpellcheck/>Spelling and Grammer Check</MenuItem>
        <MenuItem onClick={handleClose}>Word Count</MenuItem>
        <MenuItem onClick={handleClose}>Review Suggest Edits</MenuItem>
        <MenuItem onClick={handleClose}><MdCompareArrows/>Comparev Documents</MenuItem>
        <MenuItem onClick={handleClose}><ImQuotesRight/>Citation</MenuItem>
        <MenuItem onClick={handleClose}><MdOutlineExplore/>Explore</MenuItem>
        <MenuItem onClick={handleClose}>Linked Object</MenuItem>
        <MenuItem onClick={handleClose}><BiBookBookmark/>Dictonary</MenuItem>
        <hr />
        <MenuItem onClick={handleClose}><MdGTranslate/>Translate Document</MenuItem>
        <MenuItem onClick={handleClose}><MdOutlineKeyboardVoice/>Voice Typing</MenuItem>
        <hr />
        <MenuItem onClick={handleClose}><IoIosNotificationsOutline/>Notification Setting</MenuItem>
        <MenuItem onClick={handleClose}><MdOutlineRoomPreferences/>Prefrences</MenuItem>
        <MenuItem onClick={handleClose}><BsUniversalAccess/>Accessibility</MenuItem>
      </Menu>
    </div>
  );
}