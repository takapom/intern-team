
import InputItem from './componets/Input.jsx'
import Information from "./components/information"
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
    <InfomationContext.Provider value={[value, setValue]}>
      <InputItem />
    </InfomationContext.Provider>

    
    </>
  );
}

export default App
