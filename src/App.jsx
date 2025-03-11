import InputItem from './componets/Input.jsx'
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
    <InfomationContext.Provider value={[value, setValue]}>
      <InputItem />
    </InfomationContext.Provider>
    </>
  );
}

export default App
