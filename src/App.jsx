import Information from "./components/Information"
import Title from "./components/Title"
import Preview from "./components/Preview"
import PopUp from './components/Popup'
import PrintPdf from './components/PrintPdf'
import './App.css';
import { createContext, useState } from "react";

// 諸事情により、初期値を全て空文字列に変更しました
export const InformationContext = createContext([
  { name : "",
    rent : "",
    area: "",
    address: "",
    station: "",
    published: "",
    deposit: "",
    new: "",
    contract: "",
    park: "",
    insurance: "",
    exterior: null,
    interview: null,
    floor: null
  }, () => {}
]);

function App() {
  const [value, setValue] = useState({
    name : "",
    rent : "",
    area: "",
    address: "",
    station: "",
    published: "",
    deposit: "",
    new: "",
    contract: "",
    park: "",
    insurance: "",
    exterior: null,
    interview: null,
    floor: null
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
