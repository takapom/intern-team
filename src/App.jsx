import InputItem from './components/Input.jsx'
import Information from "./components/information"
import Preview from "./components/preview"
import './App.css';
import { createContext, useState } from "react";

export const InfomationContext = createContext([
    { name : "" , price : 0 }, () => {}
]);


function App() {
  const [value, setValue] = useState({
    name : "",
    price : 0
  });

  return (
    <div className='information-preview'>
    <div className='information'>
      <Information />
      </div>
    <div className='preview'>   
      <InfomationContext.Provider value={[value, setValue]}>
    </InfomationContext.Provider>
    <Preview />
    </div>
    </div>
  );
}

export default App
