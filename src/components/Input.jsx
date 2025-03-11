import React, { useContext, useState } from 'react';
import { InfomationContext } from '../App.jsx';

const InputItem = () => {
  console.log('aaaa')
  const [inputValue, setInputValue] = useState('');

  const InputChange = (e) => {
    setInputValue(e.target.value); 
  };

  const [value, setValue] = useContext(InfomationContext);


  return (
    <div>
      <input
        type="text"
        id="input-field"
        value={inputValue}
        onChange={InputChange}
        style={{
          width: '300px',
          height: '20px',
          fontSize: '16px',
          padding: '10px',
          borderRadius: '10px',
          border: '1px solid #ccc',
          marginLeft: '20px',
          display: 'block',
        }}
      />
    </div>
  );
};

export default InputItem;
