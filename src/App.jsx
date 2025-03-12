import Information from "./components/information"
import Preview from "./components/preview"
import Title from './components/Title';
import Printpdf from './components/PrintPDF'
import './App.css';
import { createContext, useState } from "react";

export const InfomationContext = createContext([
    { name : "" , rent : 0 , area: "", address: "", station: "", published: "" }, () => {}
]);

function App() {
  const [value, setValue] = useState({
    name : "",
    rent : 0,
    area: "",
    address: "", 
    station: "", 
    published: ""
  });
  return (
    // <div className='information-preview'>
    // <div className='preview'>
    //   <InfomationContext.Provider value={[value, setValue]}>
    //   <Information />
    //   <Preview />
    // </InfomationContext.Provider>
    // </div>
    // </div>
    <InfomationContext.Provider value={[value, setValue]}>
    <div className='information-preview'>
      <div className='information'>
        <Information />
      </div>
      <div className='preview'>
        <InfomationContext.Provider value={[value, setValue]}>
        <Preview />
        <Printpdf />
        </InfomationContext.Provider>
      </div>
    </div>
  </InfomationContext.Provider>
  );
}

export default App
