import { useEffect, useRef, useState } from "react";
import React from 'react';
// import "./style.css";

export function Actions(props) {
  const actions = [
    {
      text: "h1",
      tag: "h1",
    },
    {
      text: "h2",
      tag: "h2",
    },
    {
      text: "h3",
      tag: "h3",
    },
    {
      text: "h4",
      tag: "h4",
    },
    {
      text: "I",
      tag: "em",
    },
    {
      text: "B",
      tag: "strong",
    },
  ];

  return (
    <div className="actions">
      {actions.map((action) => (
        <button onClick={() => props.onClick(action.tag)}>{action.text}</button>
      ))}
    </div>
  );
}

function Random() {
  const [content, setContent] = useState("<p>Virendra</p>");
  const [selectedAction, setSelectedAction] = useState("p");
  const divRef = useRef();

  const handlePeformAction = (action) => {
    setSelectedAction(action);
  };
  console.log(selectedAction)

  useEffect(() => {
    const range = document.createRange();
    const target = divRef.current;

    range.selectNodeContents(target);
    range.collapse(false);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }, [content]);

  const onChange = (event) => {
    setContent(
      `<${selectedAction}>${event.target.innerText}</${selectedAction}>`
    );
  };

//   to  Everyone
// const Post = () => {
//     const handleMouseUp() {
//         console.log(`Selected text: ${window.getSelection().toString()}`);
//     }
//     return (
//         <div onMouseUp={handleMouseUp}>Text</div>
//     );
// }
// const Post1 = () => {
//     const handleMouseUp() {
//         console.log(`Selected text: ${window.getSelection().toString()}`);
//     }
//     return (
//         <div onMouseUp={handleMouseUp}>Text</div>
//     );
// }

// Highlighter

// import type {
//     T_Highlight,
//     T_NewHighlight
//   } from "react-pdf-highlighter/src/types";

// npm i react-highlight-words

{/* <Highlighter
    highlightClassName="YourHighlightClass"
    searchWords={["and", "or", "the"]}
    autoEscape={true}
    textToHighlight="The dog is chasing the cat. Or perhaps they're just playing?"
  /> */}

//   https://www.npmjs.com/package/react-highlight-words




  return (
    <div className="App">
      <Actions onClick={handlePeformAction} />

      <span>&lt;h1&gt;Helloworld.. &lt;/h1 &gt;</span>

      <div
        ref={divRef}
        className="editor"
        contentEditable
        onKeyUp={onChange}
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      ></div>
    </div>
  );
}

export default Random;