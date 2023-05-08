import { BiBold, BiItalic, BiUnderline } from "react-icons/bi";
import { AiOutlineStrikethrough } from "react-icons/ai";
import {
  MdFormatAlignCenter,
  MdFormatAlignJustify,
  MdFormatAlignLeft,
  MdFormatAlignRight,
  MdRedo,
  MdUndo,
} from "react-icons/md";
import { FaRemoveFormat } from "react-icons/fa";
import { RiIndentDecrease, RiIndentIncrease, RiSubscript, RiSuperscript } from "react-icons/ri";
import { GoListOrdered, GoListUnordered } from "react-icons/go";

export const icons = [
    {
      icon: <MdFormatAlignCenter />,
      action: "justifyCenter",
    },
    {
      icon: <MdFormatAlignLeft />,
      action: "justifyLeft",
    },
    {
      icon: <MdFormatAlignRight />,
      action: "justifyRight",
    },
    {
      icon: <MdFormatAlignJustify />,
      action: "justifyFull",
    },
    {
      icon: <GoListOrdered />,
      action: "insertOrderedList",
    },
    {
      icon: <GoListUnordered />,
      action: "insertUnorderedList",
    },
    {
      icon: <RiSuperscript />,
      action: "superscript",
    },
    {
      icon: <RiSubscript />,
      action: "subscript",
    },
    {
      icon: <FaRemoveFormat />,
      action: "removeFormat",
    },
    {
      icon: <RiIndentIncrease />,
      action: "indent",
    },
    {
      icon: <RiIndentDecrease />,
      action: "outdent",
    },
  ];


  export const firstIcons = [
    {
      icon: <MdUndo />,
      action: "undo",
    },
    {
      icon: <MdRedo />,
      action: "redo",
    }
  ]

  export const zoom = [
    "100%", "150%" , "200%" ,"75%", "50%" , "25%"
  ]

export const ListFontFam = [
    "Lucida Sans",
    "fantasy",
    "sans-serif",
    "monospace",
    "cursive",
    "Times New Roman",
    "system-ui",
    "ui-serif",
    "Impact",
    "ui-monospace",
    "serif",
    "ui-rounded",
    "fangsong",
    "Georgia",
    "ui-sans-serif",    
  ];

  export const fontSizes = [
    {
      fontSize: 8,
      action: "1",
    },
    {
      fontSize: 9,
      action: "2",
    },
    {
      fontSize: 10,
      action: "3",
    },
    {
      fontSize: 11,
      action: "4",
    },
    {
      fontSize:12,
      action: "5",
    },
    {
      fontSize: 14,
      action: "6",
    },
    {
      fontSize: 18,
      action: "7",
    },
  ];


export const style=[
  {
    icon: <BiBold />,
    action: "bold",
  },
  {
    icon: <BiItalic />,
    action: "italic",
  },
  {
    icon: <BiUnderline />,
    action: "underline",
  },
  {
    icon: <AiOutlineStrikethrough />,
    action: "strikethrough",
  },
]