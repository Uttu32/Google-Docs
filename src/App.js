import Header from './component/header/Header';
import Editing from './component/editingMenu/Editing';
import TextArea from './component/textArea/TextArea';
import './App.css';


function App() {
  return (
    <div>
      <div className="Header">
        <Header/>
        <Editing />
      </div>
      <div>
        <TextArea />
      </div>
    </div>
  );
}

export default App;
