import React, { createContext, useContext, useState } from 'react';
import { InfomationContext } from '../App.jsx';
import Preview from './preview.jsx';
// import { create } from '@mui/material/styles/createTransitions.js';

const InputItem = () => {
  console.log('aaaa')
  const [inputValue, setInputValue] = useState({
    name: '',
    rent: '',
    area: '',
    address: '',
    station: '',
    published: '',
  });

  const [value, setValue] = useContext(InfomationContext);

  const InputChange = (e) => {
    const { id, value: inputVal } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [id]: inputVal,
    }));
    if (id === 'name') {
      setValue((prevValue) => ({
        ...prevValue,
        name: inputVal,
      }));
    } else if (id === 'rent') {
      setValue((prevValue) => ({
        ...prevValue,
        price: Number(inputVal) || 0,
      }));
    }
    else if (id === 'area') {
      setValue((prevValue) => ({
        ...prevValue,
        area: Number(inputVal) || 0,
      }));
    }
    else if (id === 'address') {
      setValue((prevValue) => ({
        ...prevValue,
        address: Number(inputVal) || 0,
      }));
    }
    else if (id === 'station') {
      setValue((prevValue) => ({
        ...prevValue,
        station: Number(inputVal) || 0,
      }));
    }
    else if (id === 'published') {
      setValue((prevValue) => ({
        ...prevValue,
        published: Number(inputVal) || 0,
      }));
    }
  };



  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20px', // 上からの余白
        width: '100%'
      }}
    >

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <label htmlFor="input-field-1" style={{ marginBottom: '5px', fontSize: '18px', fontWeight: 'bold'}}>
        物件名
      </label>
      <input
        placeholder='例'
        type="text"
        id="name"
        value={inputValue.name}
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

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <label htmlFor="input-field-3" style={{ marginBottom: '5px', fontSize: '18px', fontWeight: "bold" }}>
        家賃
      </label>
      <input
      placeholder='例'
        type="text"
        id="rent"
        value={inputValue.rent}
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

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <label htmlFor="input-field-4" style={{ marginBottom: '5px', fontSize: '18px', fontWeight: "bold" }}>
        面積
      </label>
      <input
        placeholder='例'
        type="text"
        id="area"
        value={inputValue.area}
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


    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <label htmlFor="input-field-5" style={{ marginBottom: '5px', fontSize: '18px', fontWeight: "bold"  }}>
        所在地
      </label>
      <input
        placeholder='例'
        type="text"
        id="address"
        value={inputValue.address}
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


    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <label htmlFor="input-field-6" style={{ marginBottom: '5px', fontSize: '18px', fontWeight: "bold" }}>
        最寄駅
      </label>
      <input
        placeholder='例'
        type="text"
        id="station"
        value={inputValue.station}
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

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <label htmlFor="input-field-6" style={{ marginBottom: '5px', fontSize: '18px', fontWeight: "bold" }}>
        公開日
      </label>
      <input
        placeholder='例'
        type="text"
        id="published"
        value={inputValue.published}
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
    </div>
  );
};

export default InputItem;

