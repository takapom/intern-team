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
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '100px', // 上からの余白
      }}
    >
      <input
        type="text"
        id="input-field-1"
        value={inputValue}
        onChange={InputChange}
        style={{
          width: '300px',
          height: '20px',
          fontSize: '16px',
          padding: '10px',
          borderRadius: '10px',
          border: '1px solid #ccc',
          marginBottom: '20px', // 下の余白
        }}
      />

      <input
        type="text"
        id="input-field-2"
        value={inputValue}
        onChange={InputChange}
        style={{
          width: '300px',
          height: '20px',
          fontSize: '16px',
          padding: '10px',
          borderRadius: '10px',
          border: '1px solid #ccc',
          marginBottom: '20px',
        }}
      />

<input
        type="text"
        id="input-field-2"
        value={inputValue}
        onChange={InputChange}
        style={{
          width: '300px',
          height: '20px',
          fontSize: '16px',
          padding: '10px',
          borderRadius: '10px',
          border: '1px solid #ccc',
          marginBottom: '20px',
        }}
      />

<input
        type="text"
        id="input-field-2"
        value={inputValue}
        onChange={InputChange}
        style={{
          width: '300px',
          height: '20px',
          fontSize: '16px',
          padding: '10px',
          borderRadius: '10px',
          border: '1px solid #ccc',
          marginBottom: '20px',
        }}
      />

<input
        type="text"
        id="input-field-2"
        value={inputValue}
        onChange={InputChange}
        style={{
          width: '300px',
          height: '20px',
          fontSize: '16px',
          padding: '10px',
          borderRadius: '10px',
          border: '1px solid #ccc',
          marginBottom: '20px',
        }}
      />
    </div>
  );
};

export default InputItem;

