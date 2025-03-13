import Information from "./components/information"
import Preview from "./components/preview"
import Title from './components/title';
import PrintPdf from './components/PrintPdf'
import './App.css';
import { createContext, useState } from "react";

export const InfomationContext = createContext([
    { name : "" , rent : 0 , area: 0, address: "", station: "", published: "" , image: null}, () => {}
]);

function App() {
  const [value, setValue] = useState({
    name : "",
    rent : 0,
    area: 0,
    address: "",
    station: "",
    published: "",
    exterior: null,
    interview: null,
    floor: null
  });
  return (
    <InfomationContext.Provider value={[value, setValue]}>
    <div className='information-preview'>
      <div className='information'>
        <Information />
      </div>
      <div className='preview'>
        <Title />
        <Preview />
        <div className='buttons'>
          <PrintPdf />
        </div>
      </div>
    </div>
  </InfomationContext.Provider>
  );
}

export default App
