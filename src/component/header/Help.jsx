import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {BiHelpCircle} from 'react-icons/bi';
import {MdCellTower} from 'react-icons/md';
import {FaGraduationCap} from 'react-icons/fa';
import {MdOutlineHelpCenter} from 'react-icons/md';
import {GoReport} from 'react-icons/go';
import {HiOutlineDocumentText} from 'react-icons/hi';
import {BsFillKeyboardFill} from 'react-icons/bs';

export default function BasicMenu() {
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
        sx={{fontSize:"0.875rem",width:"fit-content", padding:"0px", height:"1.2rem"}}
      >
        Help
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
        <MenuItem onClick={handleClose}><BiHelpCircle/>Help</MenuItem>
        <MenuItem onClick={handleClose}><FaGraduationCap/>Training </MenuItem>
        <MenuItem onClick={handleClose}><MdCellTower/>Updates</MenuItem>
        <hr />
        <MenuItem onClick={handleClose}><MdOutlineHelpCenter/>Help Docs Improve</MenuItem>
        <MenuItem onClick={handleClose}><GoReport/>Report Abuse</MenuItem>
        <hr />
        <MenuItem onClick={handleClose}><HiOutlineDocumentText/>Privacy Policy</MenuItem>
        <MenuItem onClick={handleClose}><HiOutlineDocumentText/>Terms of Service</MenuItem>
        <hr />
        <MenuItem onClick={handleClose}><BsFillKeyboardFill/>KeyBoard ShortCut</MenuItem>
      </Menu>
    </div>
  );
}