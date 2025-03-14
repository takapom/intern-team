import React, { createContext, useContext, useState } from 'react';
import { InformationContext } from '../App.jsx';
import { useRef } from 'react';
import { common } from '@mui/material/colors';

const InputItem = () => {
  const [inputValue, setInputValue] = useState({
    name: '',
    rent: '',
    area: '',
    address: '',
    station: '',
    published: '',
  });

  const [,setPropertyInfo] = useContext(InformationContext);
  const fileInputRef = useRef(null);
  const fileInputRef2 = useRef(null);
  const fileInputRef3= useRef(null);
  const handleImageButtonClick = () =>{
    fileInputRef.current.click();
  }

  const handleImageButtonClick2 = () =>{
    fileInputRef2.current.click();
  }

  const handleImageButtonClick3 = () =>{
    fileInputRef3.current.click();
  }


  const InputChange = (e) => {
    const { id, value: inputVal } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [id]: inputVal,
    }));
    if (id === 'name') {
      setPropertyInfo((prevValue) => ({
        ...prevValue,
        name: inputVal,
      }));
    } else if (id === 'rent') {
      setPropertyInfo((prevValue) => ({
        ...prevValue,
        rent: Number(inputVal) || 0,
      }));
    }
    else if (id === 'area') {
      setPropertyInfo((prevValue) => ({
        ...prevValue,
        area: Number(inputVal) || 0,
      }));
    }
    else if (id === 'address') {
      setPropertyInfo((prevValue) => ({
        ...prevValue,
        address: inputVal,
      }));
    }
    else if (id === 'station') {
      setPropertyInfo((prevValue) => ({
        ...prevValue,
        station: inputVal,
      }));
    }
    else if (id === 'published') {
      setPropertyInfo((prevValue) => ({
        ...prevValue,
        published: inputVal,
      }));
    }
    else if (id === 'deposit') {
      setPropertyInfo((prevValue) => ({
        ...prevValue,
        deposit: Number(inputVal) || 0,
      }));
    }
    else if (id === 'new') {
      setPropertyInfo((prevValue) => ({
        ...prevValue,
        new: Number(inputVal) || 0,
    }));
  }
  else if (id === 'contract') {
    setPropertyInfo((prevValue) => ({
      ...prevValue,
      contract: inputVal,
    }));
  }
  else if (id === 'park') {
    setPropertyInfo((prevValue) => ({
      ...prevValue,
      park: inputVal,
    }));
  }
  else if (id === 'insurance') {
    setPropertyInfo((prevValue) => ({
      ...prevValue,
      insurance: inputVal,
    }));
  } 

  else if (id === 'construction') {
    setPropertyInfo((prevValue) => ({
      ...prevValue,
      construction: Number(inputVal) || 0,
  }));
}
  //共益費
  else if (id === 'common') {
    setPropertyInfo((prevValue) => ({
      ...prevValue,
      common: Number(inputVal) || 0,
  }));
  }

  // 入居可能日
  else if (id === 'available') {
    setPropertyInfo((prevValue) => ({
      ...prevValue,
      construction: Number(inputVal) || 0,
  }));
}

  //階層
  else if (id === 'hierarchy') {
    setPropertyInfo((prevValue) => ({
      ...prevValue,
      construction: Number(inputVal) || 0,
  }));
  }

//設備
  else if (id === 'equipment') {
    setPropertyInfo((prevValue) => ({
      ...prevValue,
      equipment: inputVal,
    }));
  } 
};
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPropertyInfo((prev) => ({...prev, exterior: file}));
    }
  };

  const handleFileChange2 = (e) => {
    const file2 = e.target.files[0];
    if (file2) {
      setPropertyInfo((prev) => ({...prev, interview: file2}));
    }
  };

  const handleFileChange3 = (e) => {
    const file3 = e.target.files[0];
    if (file3) {
      setPropertyInfo((prev) => ({...prev, floor: file3}));
    }
  };
  
  //画像のアップロードボタンのクリックでファイルを開く(内観と外観と間取り)
  const handleImage = () => {
    fileInputRef.current.click();
  }

  const handleImage2 = () => {
    fileInputRef2.current.click();
  }

  const handleImage3 = () => {
    fileInputRef3.current.click();
  }


  return (
    <div>
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
        placeholder='〇〇マンション'
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
        家賃(円)
      </label>
      <input
      placeholder='50000'
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
      <label htmlFor="input-field-5" style={{ marginBottom: '5px', fontSize: '18px', fontWeight: "bold"  }}>
        所在地
      </label>
      <input
        placeholder='〇〇県〇〇市〇〇町9-99-9'
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
        placeholder='JR〇〇線〇〇駅 徒歩5分'
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

  


    {/* 以下は契約条件 */}
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <label htmlFor="input-field-6" style={{ marginBottom: '5px', fontSize: '18px', fontWeight: "bold" }}>
        敷金/礼金(円)
      </label>
      <input
        placeholder='40000円'
        type="text"
        id="deposit"
        value={inputValue.deposit}
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
        共益費
      </label>
      <input
        placeholder='火災保険'
        type="text"
        id="common"
        value={inputValue.common}
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
        更新料(円)
      </label>
      <input
        placeholder='60000円'
        type="text"
        id="new"
        value={inputValue.new}
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
        契約期間
      </label>
      <input
        placeholder='2年'
        type="text"
        id="contract"
        value={inputValue.contract}
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
        駐車場
      </label>
      <input
        placeholder='ありorなし'
        type="text"
        id="park"
        value={inputValue.park}
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
        保険加入
      </label>
      <input
        placeholder='火災保険'
        type="text"
        id="insurance"
        value={inputValue.insurance}
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
        入居可能日
      </label>
      <input
        placeholder='YYYY/MM/DD'
        type="text"
        id="available"
        value={inputValue.available}
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
        面積(m²)
      </label>
      <input
        placeholder='99.99'
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
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '1.05rem'}}>
      <label htmlFor="input-field-6" style={{ marginBottom: '5px', fontSize: '18px', fontWeight: "bold" }}>
        公開日
      </label>
      <input
        placeholder='YYYY/MM/DD'
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

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '1.05rem'}}>
      <label htmlFor="input-field-6" style={{ marginBottom: '5px', fontSize: '18px', fontWeight: "bold" }}>
      築年数(年)
      </label>
      <input
        placeholder='10年'
        type="text"
        id="construction"
        value={inputValue.construction}
        onChange={InputChange}
        style={{
          width: '300px',
          height: 
          
          '20px',
          fontSize: '16px',
          padding: '10px',
          borderRadius: '10px',
          border: '1px solid #ccc',
          marginBottom: '20px',
        }}
      />

    </div>

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '1.05rem'}}>
      <label htmlFor="input-field-6" style={{ marginBottom: '5px', fontSize: '18px', fontWeight: "bold" }}>
      階層
      </label>
      <input
        placeholder='〇階'
        type="text"
        id="hierarchy"
        value={inputValue.hierarchy}
        onChange={InputChange}
        style={{
          width: '300px',
          height: 
          
          '20px',
          fontSize: '16px',
          padding: '10px',
          borderRadius: '10px',
          border: '1px solid #ccc',
          marginBottom: '20px',
        }}
      />
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '1.05rem'}}>
      <label htmlFor="input-field-6" style={{ marginBottom: '5px', fontSize: '18px', fontWeight: "bold" }}>
      設備
      </label>
      <input
        placeholder='トイレ,バス,バルコニー,,,'
        type="text"
        id="equipment"
        value={inputValue.equipment}
        onChange={InputChange}
        style={{
          width: '300px',
          height: 
          
          '20px',
          fontSize: '16px',
          padding: '10px',
          borderRadius: '10px',
          border: '1px solid #ccc',
          marginBottom: '20px',
        }}
      />
    </div>


   {/* 画像をアップロード処理する  */}
    <div style=
    {{display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      marginLeft: '10px',
      marginBottom: '10px'
      }}>
      <label htmlFor="input-field-6"
       style={{ marginBottom: '5px', fontSize: '18px', fontWeight: "bold" }}>
        外観をアップロード</label>
      <button style={{
            backgroundColor: '#1976d2',
            color: 'white',
            padding: '7px 16px',
            border: 'none',
            borderRadius: '6px',
            fontSize: '13px',
            fontWeight: 'bold',
            marginTop: '5px',
            width: '100px' // オプション：親幅に合わせる

      }}
      onClick={handleImageButtonClick}>画像を選択</button>
      <input 
      type="file"
      accept='image/*'
      ref={fileInputRef}
      onChange={handleFileChange}
      style={{ display: 'none'}}
      />
    </div> 



    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '10px', marginBottom: '10px' }}>
      <label htmlFor="input-field-6"
       style={{ marginBottom: '5px', fontSize: '18px', fontWeight: "bold", textAlign: 'center' }}>
        内観をアップロード</label>
      <button style={{
                    backgroundColor: '#1976d2',
                    color: 'white',
                    padding: '7px 16px',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '13px',
                    fontWeight: 'bold',
                    marginTop: '5px',
                    width: '100px' // オプション：親幅に合わせる
      }}
      onClick={handleImageButtonClick2}>画像を選択</button>
      <input 
      type="file"
      accept='image/*'
      ref={fileInputRef2}
      onChange={handleFileChange2}
      style={{ display: 'none'}}
      />
    </div> 

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '10px' }}>
      <label htmlFor="input-field-6"
       style={{ marginBottom: '5px', fontSize: '18px', fontWeight: "bold", textAlign: 'center' }}>
      間取りをアップロード</label>
      <button 
      style={{
        backgroundColor: '#1976d2',
        color: 'white',
        padding: '7px 16px',
        border: 'none',
        borderRadius: '6px',
        fontSize: '13px',
        fontWeight: 'bold',
        marginTop: '5px',
        marginBottom: '20px',
        width: '100px' // オプション：親幅に合わせる
      }}
      onClick={handleImageButtonClick3}>画像を選択</button>
      <input 
      type="file"
      accept='image/*'
      ref={fileInputRef3}
      onChange={handleFileChange3}
      style={{ display: 'none'}}
      />
    </div>
    </div>
  );
};

export default InputItem;
