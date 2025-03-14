import React, { useState } from "react";
import "../style/popup.css";

const PopUp = () => {
  const [isPopUpVisible, setPopUpVisible] = useState(false);

  const togglePopUp = () => {
    setPopUpVisible(!isPopUpVisible);
  };

  return (
    <div>
      <button onClick={togglePopUp} className="usage-btn">使い方</button>
      {isPopUpVisible && (
        <div>
          <div className="PopUp">

            <h3>使い方</h3>
            <p className='text'>
              物件名、家賃、面積、所在地、最寄駅、契約条件、物件情報、公開日などの情報を入力します。
            </p>
            <p className='text'>
              注意事項：
            <br />
            <ul className="list">
              <li>家賃、面積、各費用は半角数字で入力してください。</li>
              <li>入力内容に漏れや間違いがあると、プレビューに反映されない場合がありますので、再度ご確認ください。</li>
            </ul>
            </p>
            <p className='text'>
              操作手順：
            <br />
            <ol className="list">
              <li>「情報入力欄」に必要な情報を入力してください。</li>
              <li>「写真をアップロード」ボタンで画像を選択し、プレビュー画面で確認します。</li>
              <li>入力が完了したら、「PDFダウンロード」ボタンをクリックしてファイルを保存できます。</li>
            </ol>
            </p>
            <p className='text'>
              写真のアップロード手順：
            <br />
            <ol className="list">
              <li>「画像を選択」ボタンをクリック</li>
              <li>写真を選択</li>
              <li>「開く」を選択すると画像が表示されます</li>
            </ol>
            </p>
            <button onClick={togglePopUp} className="close-btn">閉じる</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopUp;