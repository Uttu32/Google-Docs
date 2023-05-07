import React,{useRef} from "react";
import Estyles from "./Editing.module.css";
import { BiUndo } from "react-icons/bi";
import { BiRedo } from "react-icons/bi";
import { BiPaintRoll } from "react-icons/bi";
import { AiOutlinePrinter } from "react-icons/ai";
import { MdSpellcheck } from "react-icons/md";
import { HiMinusSm } from "react-icons/hi";
import { HiPlusSm } from "react-icons/hi";
import { BsTypeBold } from "react-icons/bs";
import { BiItalic } from "react-icons/bi";
import { MdFormatUnderlined } from "react-icons/md";
import { TbTextColor } from "react-icons/tb";
import { BiHighlight } from "react-icons/bi";
import { GrGallery } from "react-icons/gr";
import { MdOutlineFormatAlignLeft } from "react-icons/md";
import { MdFormatLineSpacing } from "react-icons/md";
import { MdChecklistRtl } from "react-icons/md";
import { MdFormatListBulleted } from "react-icons/md";
import { MdFormatListNumbered } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";
const Editing = () => {

  const refer = useRef(null);

  const zoom = [50, 75, 90, 100];
  const heading = [
    { type: "h1", label: "Heading 1" },
    { type: "h2", label: "Heading 2" },
    { type: "h3", label: "Heading 3" },
    { type: "h4", label: "Heading 4" },
    { type: "h5", label: "Heading 5" },
    { type: "h6", label: "Heading 6" },
  ];
  const fontSize = [8, 9, 10, 11, 12, 14, 18, 24, 30, 36, 48, 60, 72, 96];
  // const count = [1, 2, 3, 4, 5, 6];

  function handleItalic(){
    document.execCommand("italic");
  }



  return (
    <div>
      <div className={Estyles.mainContainer}>
        <nav className={Estyles.navContainer}>
          <div className={Estyles.rigthSide}>
            <BiUndo fontSize="1.1em" className={Estyles.icons} />
            <BiRedo fontSize="1.1em" className={Estyles.icons} />
            <AiOutlinePrinter fontSize="1.1em" className={Estyles.icons} />
            <MdSpellcheck fontSize="1.1em" className={Estyles.icons} />
            <BiPaintRoll fontSize="1.1em" className={Estyles.icons} />

            {/* Zoom */}

            <select style={{ border: "none", backgroundColor: "#edf3fb" }}>
              {zoom.map((x, index) => {
                return <option key={index}>{x}</option>;
              })}
            </select>
            <div class={Estyles.vl}></div>

            {/* heading */}

            <select
              style={{ border: "none", backgroundColor: "#edf3fb" }}
              className={Estyles.dropdown}
            >
              {heading.map((x, index) => {
                return (
                  <option className={Estyles[x.type]} key={index}>
                    {x.label}
                  </option>
                );
              })}
            </select>
            <div class={Estyles.vl}></div>
            <HiMinusSm fontSize="1.1em" className={Estyles.icons} />

            {/* fontSize */}

            <select
              style={{
                appearance: "none",
                width: "32px",
                height: "24px",
                textAlign: "center",
                borderRadius: "5px",
                backgroundColor: "#edf3fb",
              }}
            >
              {fontSize.map((x, index) => {
                return <option key={index}>{x}</option>;
              })}
            </select>
            <HiPlusSm fontSize="1.1em" className={Estyles.icons} />
            <div class={Estyles.vl}></div>
              <BsTypeBold
                fontSize="1.1em"
                className={Estyles.icons}
              />
              <BiItalic onClick={handleItalic} fontSize="1.1em" className={Estyles.icons} />
              <MdFormatUnderlined fontSize="1.1em" className={Estyles.icons} />
              <TbTextColor fontSize="1.1em" className={Estyles.icons} />
              <BiHighlight fontSize="1.1em" className={Estyles.icons} />
            <div class={Estyles.vl}></div>
            <GrGallery fontSize="1.1em" className={Estyles.icons} />
            <div class={Estyles.vl}></div>
            <MdOutlineFormatAlignLeft
              fontSize="1.1em"
              className={Estyles.icons}
            />
            <MdFormatLineSpacing fontSize="1.1em" className={Estyles.icons} />
            <MdChecklistRtl fontSize="1.1em" className={Estyles.icons} />
            <MdFormatListBulleted fontSize="1.1em" className={Estyles.icons} />
            <MdFormatListNumbered fontSize="1.1em" className={Estyles.icons} />
          </div>
          <div className={Estyles.RightContainer}>
            <label>
              <FiEdit2 fontSize="1.1em" />
            </label>
            <label> Editing</label>
            <select style={{ appearance: "none", border: "none" }}></select>
          </div>
        </nav>
      </div>
      {/* //Text Area */ }
      <div className={Estyles.MainBoundary}>
        <div id='edit' className={Estyles.Content}
        contenteditable="true" 
        ref={refer}
        >
          Type @ insert
        </div>
      </div>
    </div>
  );
};

export default Editing;
