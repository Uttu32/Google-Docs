import Header from './component/header/Header';
// import Editing from './component/editingMenu/Editing';
// import TextArea from "./component/textArea/TextArea";
import Editin from "./component/editingMenu/Editin";
import './App.css';


function App() {
  return (
    <div>
      <div className="Header">
        <Header/>
        {/* <Editing /> */}
        <Editin />
      </div>
      
      {/* <TextArea/> */}
      
    </div>
  );
}

export default App;
