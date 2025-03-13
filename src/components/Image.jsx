import React, { useRef } from 'react';
import { useContext } from 'react';
import { InfomationContext } from '../App';

function ImageUploadButton(){
    const [value, setValue] = useContext(InfomationContext);
    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file){
            setValue(prev => ({...prev, image: file}));

        }
    };


    return(
        <div>
            <button onClick={handleButtonClick}>画像をアップロード</button>
            <input
             type="text"
             accept='image/*'
             ref={fileInputRef}
             onChange={handleFileChange}
             style={{ display: 'none' }}
             />
        </div>
    );
}