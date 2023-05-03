import React from 'react'
import Styles from "./TextArea.module.css";

const TextArea = () => {
  return (
    <div className={Styles.MainBoundary}>
      <div className={Styles.Content} contenteditable="true" >
        Type @ insert
      </div>
    </div>
  )
}

export default TextArea
