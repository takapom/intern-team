import React, { useState } from "react";
import "../style/popup.css";

const PopUp = () => {
  const [isPopUpVisible, setPopUpVisible] = useState(false);

  const togglePopUp = () => {
    setPopUpVisible(!isPopUpVisible);
  };

  return (
    <div>
      <button onClick={togglePopUp}>ポップアップを開く</button>

      {isPopUpVisible && (
        <div className="overlay">
          <div className="PopUp">
            <p>内容</p>
            <button onClick={togglePopUp}>閉じる</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopUp;
