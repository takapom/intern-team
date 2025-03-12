import Information from "./components/information"
import Preview from "./components/preview"
import Title from './components/Title';
import Printpdf from './components/PrintPDF'
import './App.css';
import { createContext, useState } from "react";

export const InfomationContext = createContext([
    { name : "" , rent : 0 , area: "", address: "", station: "", published: "" , image: null}, () => {}
]);

function App() {
  const [value, setValue] = useState({
    name : "",
    rent : 0,
    area: "",
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
        <Preview />
        <Printpdf />
      </div>
    </div>
  </InfomationContext.Provider>
  );
}

export default App
