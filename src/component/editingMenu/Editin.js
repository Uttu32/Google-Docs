import React, { useRef, useState } from "react";
import Styles from "./Editing.module.css";
import { TbTextColor } from "react-icons/tb";
import { BsLink } from "react-icons/bs";
import { GrGallery } from "react-icons/gr";
import { FiEdit2 } from "react-icons/fi";
import { icons } from "../../Icon/Icon";
import { firstIcons } from "../../Icon/Icon";
import { AiOutlinePrinter } from "react-icons/ai";
import { zoom, ListFontFam, fontSizes, style } from "../../Icon/Icon";

const Editing = () => {
  const refer = useRef("");
  const [zoomEle, setZoomEle] = useState("100%");
  const [fontNames, setFontNames] = useState("Font Style");
  const [fontSize, setFontSize] = useState("Font Size");
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
    document.execCommand("fontName");
    console.log(e.target.value);
  }

  //font Size
  function handleFontSize(e) {
    setFontSize(e.target.value);
    document.execCommand("fontSize", false, fontSize);
  }

  //color
  function handleFontColors(e) {
    setColor(e.target.value);
    document.execCommand("foreColor");
  }

  // Link
  function handleOpen(value) {
    setShowLink(!showLink ? true : false);
    if (value === "link") {
      document.execCommand("createLink");
    }
    setLink("");
  }
  // Image
  function handleImageOpen() {
    inputImage.current.click();
  }
  // capture Image
  function captureImage(event) {
    if (event.target.files[0]) {
      console.log(event.target.files[0]);
      document.execCommand(
        "insertImage",
        "",
        URL.createObjectURL(event.target.files[0])
      );
    }
  }

  return (
    <div>
      {/* Left side logo */}
      {/* redo and undo button */}
      <div>
        {firstIcons.map((ele) => {
          return <button onClick={() => handleAction(ele)}>{ele.icon}</button>;
        })}
        {/* print option */}
        <button onClick={handlePrinter}>
          <AiOutlinePrinter />
        </button>

        {/* zoom */}

        <select style={{ width: "100%" }} id="fontStyle" onChange={handleZoom}>
          <option>{zoomEle}</option>
          {zoom.map((x) => (
            <option key={x}>{x}</option>
          ))}
        </select>

        {/* font family */}
        <select
          className={Styles.fontStyle}
          id="fontStyle"
          onChange={handleFontStyles}
        >
          <option>{fontNames}</option>
          {ListFontFam.map((x) => (
            <option key={x}>{x}</option>
          ))}
        </select>

        {/* font size */}
        <select id="fontSize" onChange={handleFontSize}>
          <option>{fontSize}</option>
          {fontSizes.map((x) => (
            <option key={x}>{x}</option>
          ))}
        </select>
        {/* Bold, italic and underline */}
        {style.map((ele) => {
          return <button onClick={() => handleAction(ele)}>{ele.icon}</button>;
        })}
        {/* text color */}
        <button>
          <label htmlFor="color">
            <TbTextColor style={{ color: color }} />
          </label>
          <input
            className={style.input}
            id="color"
            type="color"
            value={color}
            onChange={handleFontColors}
          />
        </button>
        {/* Link */}
        <button onClick={() => handleOpen("link")}>
          <label htmlFor="link">
            <BsLink />
          </label>
        </button>
        <button>
          <label htmlFor="link">
            <GrGallery onClick={handleImageOpen} />
          </label>
        </button>

        {/* {showLink ? (
          <div className={Styles.linkBox}>
            <h4>Paste your Link Here....</h4>

            <input
              id="link"
              value={link}
              type="url"
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
        ) : (
          ""
        )} */}
        <input ref={inputImage} hidden onChange={captureImage} type="file" />

        {/* Aligning options */}
        {icons.map((element, index) => (
          <button key={index} onClick={() => handleAction(element)}>
            {element.icon}
          </button>
        ))}
      </div>

      {/* Right Side Logo */}
      <div>
        <label>
          <FiEdit2 fontSize="1.1em" />
        </label>
        <label> Editing</label>
        <select style={{ appearance: "none", border: "none" }}></select>
      </div>

      {/* Text Area */}
      <div className={Styles.MainBoundary}>
      {showLink ? (
          <div className={Styles.linkBox}>
            <h4>Paste your Link Here....</h4>

            <input
              id="link"
              value={link}
              type="url"
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
        ) : (
          ""
        )}
        <div
          id="edit"
          className={Styles.Content}
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
