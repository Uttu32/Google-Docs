import React,{useState} from "react";
import { FcDocument } from "react-icons/fc";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { MdDriveFileMoveOutline } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Button } from "@mui/material";
import { MdOutlineCloudDone } from "react-icons/md";
import { RxCountdownTimer } from "react-icons/rx";
import Format from "./FormatNav";
import Tools from "./Tools";
import Styles from "./Header.module.css";
import Extensions from "./Extentions";
import Help from "./Help";
import FileNav from "./FileNav";
import EditNav from "./EditNav";
import ViewNav from "./ViewNav";
import InsertNav from "./InsertNav";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const Header = () => {
  const [star, setStar] = useState(false);

  function handleColor(){
    setStar(!star);
  }

  return (
    <div className={Styles.Main}>
      <div className={Styles.LeftSide}>
        <div className={Styles.firstIcon}>
          {/* document image here */}
          <FcDocument cursor="pointer" size="3em" />
        </div>

        <div className={Styles.SecondPart}>
          <div className={Styles.SecondUpper}>
            {/* upper left containing input field and 3 logo */}
            <p contenteditable="true">Untitled Document</p>
             {/* <StarBorderOutlinedIcon color="red" cursor="pointer" size="1.5em" /> */}
          {star? <StarIcon onClick={handleColor} sx={{color:"blue"}} /> :<StarBorderIcon onClick={handleColor} /> }
            
            <MdDriveFileMoveOutline cursor="pointer" size="1.5em" />
            <MdOutlineCloudDone cursor="pointer" size="1.5em" />
          </div>
          <div className={Styles.SecondLower}>
            {/* 8 text like file edit etc. */}
            <FileNav />
            <EditNav />
            <ViewNav />
            <InsertNav />
            <Format />
            <Tools />
            <Extensions />
            <Help />
          </div>
        </div>
      </div>

      <div className={Styles.RightSide}>
        {/* Right Side Here */}
        <RxCountdownTimer cursor="pointer" size="1.5em" />
        <BiCommentDetail cursor="pointer" size="1.5em" />
        <AiOutlineVideoCameraAdd cursor="pointer" size="1.5em" />
        <Button variant="outlined" startIcon={<LockOutlinedIcon />}>
          Share
        </Button>
      </div>
    </div>
  );
};

export default Header;
