import Information from "./components/Information"
import Title from "./components/Title"
import Preview from "./components/Preview"
import PopUp from './components/Popup'
import PrintPdf from './components/PrintPdf'
import './App.css';
import { createContext, useState } from "react";

export const InformationContext = createContext([{
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
  construction: "",
  common: "",
  available: "",
  hierarchy: "",
  equipment: "",
  exterior: null,
  interview: null,
  floor: null
  }, () => {}
]);

function App() {
  const [propertyInfo, setPropertyInfo] = useState({
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
    construction: "",
    common: "",
    available: "",
    hierarchy: "",
    equipment: "",
    exterior: null,
    interview: null,
    floor: null
  });
  return (
    <InformationContext.Provider value={[propertyInfo, setPropertyInfo]}>
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
