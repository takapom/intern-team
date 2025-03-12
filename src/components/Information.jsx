import React from 'react';
import "../style/information.css"
import Input from './Input.jsx';
import Button from './Button.jsx';

const Information = () => {
  return (
    <div className='big-container'>
        <div className='header-text'>
            <h2 className='text'>情報入力欄</h2>
        </div>
        <div className='input-form'>
          <Input />
        </div>
    </div>
  )
}

export default Information;