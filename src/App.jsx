import Information from "./components/information"
import Preview from "./components/preview"
import Title from './components/title';
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
    <InfomationContext.Provider value={[value, setValue]}>
    <div className='information-preview'>
      <div className='information'>
        <Information />
      </div>
      <div className='preview'>
        {/* <InfomationContext.Provider value={[value, setValue]}> */}
        <Title />
        <Preview />
        <Printpdf />
        {/* </InfomationContext.Provider> */}
      </div>
    </div>
  </InfomationContext.Provider>
  );
}

export default App
