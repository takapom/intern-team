import Information from "./components/Information"
import Title from "./components/Title"
import Preview from "./components/Preview"
import PopUp from './components/Popup'
import PrintPdf from './components/PrintPdf'
import './App.css';
import { createContext, useState } from "react";

export const InformationContext = createContext([
    { name : "" , rent : 0 , area: "", address: "", station: "", published: "" , exterior: null, interview: null, floor: null}, () => {}
]);

// 増やしたもの
// ・共益費
// ・入居可能日

// ・階層
// ・設備

function App() {
  const [value, setValue] = useState({
    name : "",
    rent : 0,
    area: "",
    address: "",
    station: "",
    published: "",
    deposit:0,
    new: 0,
    contract: '',
    park: '',
    insurance:'',
    exterior: null,
    interview: null,
    floor: null,
    construction: 0,
    common: 0,
    available: '',
    hierarchy: 0,
    equipment: ''
  });
  return (
    <InformationContext.Provider value={[value, setValue]}>
    <div className='information-preview'>
      <div className='information'>
        <Information />
      </div>
      <div className='preview'>
        <Title />
        <Preview />
        <div className='buttons'>
          <PopUp />
          <PrintPdf />
        </div>
      </div>
    </div>
  </InformationContext.Provider>
  );
}

export default App
