import React, { useRef, useState } from "react";
import Styles from "./Editing.module.css";
import { TbTextColor } from "react-icons/tb";
import { BsLink } from "react-icons/bs";
import { GrGallery } from "react-icons/gr";
import { FiEdit2 } from "react-icons/fi";
import { icons } from "../../Icon/Icon";
import { firstIcons } from "../../Icon/Icon";
import PrintIcon from '@mui/icons-material/Print';
import Estyles from "./Editing.module.css";
import { firstIcons, zoom, ListFontFam, fontSizes, style } from "../../Icon/Icon";

const Editing = () => {
  const refer = useRef("");
  const [zoomEle, setZoomEle] = useState("100%");
  const [fontNames, setFontNames] = useState("Font Style");
  const [fontSize, setFontSize] = useState("text");
  const [color, setColor] = useState("#000000");
  const [showLink, setShowLink] = useState(false);
  const [link, setLink] = useState("");
  const inputImage = useRef();

  function handleAction(ele) {
    document.execCommand(`${ele.action}`);
  }

  // zoom
  function handleZoom(e) {
    setZoomEle(e.target.value);
    if (e.target.value === "100%") {
      refer.current.style.transform = "scale(1,1)";
    } else if (e.target.value === "150%") {
      refer.current.style.transform = "scale(1.5,1)";
    } else if (e.target.value === "200%") {
      refer.current.style.transform = "scale(2,1)";
    } else if (e.target.value === "50%") {
      refer.current.style.transform = "scale(0.65,0.65)";
    } else if (e.target.value === "25%") {
      refer.current.style.transform = "scale(0.5,0.5)";
    } else if (e.target.value === "75%") {
      refer.current.style.transform = "scale(0.8,1)";
    }
  }

  // printing
  function handlePrinter() {
    let printContents = refer.current.innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  }

  // Font Family
  function handleFontStyles(e) {
    setFontNames(e.target.value);
    document.execCommand("fontName", false, fontNames);
  }

  //font Size
  function handleFontSize(e) {
    setFontSize(e.target.value);
    document.execCommand("fontSize", false, fontSize);
  }

  //color
  function handleFontColors(e) {
    setColor(e.target.value);
    document.execCommand("foreColor", false, color);
  }

  // Link
  function handleOpen() {
    setShowLink(!showLink);
    
      document.execCommand("createLink",false,showLink);
    setLink("");
  }
  // Image
  function handleImageOpen() {
    inputImage.current.click();
  }
  // capture Image
  function captureImage(event) {
    if (event.target.files[0]) {
      document.execCommand(
        "insertImage",
        "",
        URL.createObjectURL(event.target.files[0])
      );
    }
  }

  return (
    <>
      <div className={Estyles.mainContainer}>
        {/* Left side logo */}
        {/* redo and undo button */}
        <nav className={Estyles.navContainer}>
          <div className={Estyles.leftSide}>
            {firstIcons.map((ele) => {
              return (
                <button
                  onClick={() => handleAction(ele)}
                  className={Estyles.icons}
                >
                  {ele.icon}
                </button>
              );
            })}
            {/* print option */}            
            <PrintIcon
             onClick={handlePrinter}
             fontSize="2rem"
             className={Estyles.icons}
            />

            {/* zoom */}

            <select
              style={{
                appearance: "none",
               
                height: "24px",
                textAlign: "center",
                borderRadius: "5px",
                backgroundColor: "#edf3fb",
                border: "none",
              }}
              id="fontStyle"
              onChange={handleZoom}
            >
              <option>{zoomEle}</option>
              {zoom.map((x) => (
                <option key={x}>{x}</option>
              ))}
            </select>
            <div class={Estyles.vl}></div>


            {/* font family */}
            <select
              style={{
                appearance: "none",
               
                textAlign: "center",
               
                backgroundColor: "#edf3fb",
                border: "none",
                paddingLeft: "0px" ,
                paddingRight:"0px",
                
              }}
            
              id="fontStyle"
              onChange={handleFontStyles}
            >
              <option>{fontNames}</option>
              {ListFontFam.map((x) => (
                <option key={x}>{x}</option>
              ))}
            </select>
            <div class={Estyles.vl}></div>


            {/* font size */}

            <select
              className={Estyles.icons}
              style={{ backgroundColor: "#edf3fb" }}
              id="fontSize"
              onChange={handleFontSize}
            >
              <option className={Estyles.icons} style={{ width: "18px" }}>
                {fontSize}
              </option>
              {fontSizes.map((x) => (
                <option
                  style={{ width: "18px" }}
                  className={Estyles.icons}
                  key={x}
                >
                  {x}
                </option>
              ))}
            </select>
            <div class={Estyles.vl}></div>

            {/* Bold, italic and underline */}

            {style.map((ele) => {
              return (
                <button
                  className={Estyles.icons}
                  onClick={() => handleAction(ele)}
                >
                  {ele.icon}
                </button>
              );
            })}

            {/* text color */}
        
            <label htmlFor="color">
              <TbTextColor
                style={{ color: color }}
                fontSize="1.1rem"
                className={Estyles.icons}
              />
            </label>
            <input
              className={style.input}
              type="color"
              value={color}
              onChange={handleFontColors}
            />
       
            <div class={Estyles.vl}></div>
            {/* Link */}

            
            <label onClick={() => handleOpen("link")} htmlFor="link">
              <BsLink fontSize="1.1rem" className={Estyles.icons} />
            </label>
         
            <label htmlFor="link">
              <GrGallery
                onClick={handleImageOpen}
                fontSize="1.1rem"
                className={Estyles.icons}
              />
            </label>
            <input
              ref={inputImage}
              hidden
              onChange={(e)=>captureImage(e)}
              type="file"
            />

            {/* Aligning options */}

            {icons.map((element, index) => (
              <button
                className={Estyles.icons}
                key={index}
                onClick={() => handleAction(element)}
              >
                {element.icon}
              </button>
            ))}
          </div>

          {/* Right Side Logo */}
          <div className={Estyles.RightLogo}>
            <label>
              <FiEdit2 fontSize="1.1rem" className={Estyles.icons} />
            </label>
            <label> Editing</label>
            <select style={{ appearance: "none", border: "none" }}></select>
          </div>
        </nav>
       
      </div>
      
      <div className={Estyles.MainBoundary}>
     
        {showLink ? (
          <div className={Estyles.linkBox}>
            <h4>Paste your Link Here....</h4>

            <input
              id="link"
              value={link}
              type="url"
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
        ) : (
          <div style={{display:'none'}}></div>
        )}
     
        <div
          id="edit"
          className={Styles.Content}
          contenteditable="true"
          ref={refer}
          style={{padding:'4rem', margin:'2rem'}}
        >
          Type @ insert
        </div>
        
      </div>
    </>
  );
};

export default Editing;
