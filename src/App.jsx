import InputItem from './components/Input.jsx'
import Information from "./components/information"
import Preview from "./components/preview"
// import './App.css';
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
    <>
    <Information />
    {/* <InfomationContext.Provider value={[value, setValue]}>
      <InputItem />
    </InfomationContext.Provider> */}
    <Preview />
    </>
  );
}

export default App
