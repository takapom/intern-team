import "../style/Preview.css";
import { useContext, useState } from "react";
import { InfomationContext } from "../App";
import Button from "./Button";

export default function Preview() {
    const [value, setValue] = useContext(InfomationContext);

    let imageUrl = null;
    if (value.exterior){
        imageUrl = URL.createObjectURL(value.exterior);
    }

    let imageUrl2 = null;
    if (value.interview){
        imageUrl2 = URL.createObjectURL(value.interview);
    }

    let imageUrl3 = null;
    if (value.floor){
        imageUrl3 = URL.createObjectURL(value.floor);
    }

    return (
        <div className="preview-main" id="pdf">
            <div className="preview-header">
                <div className="preview-bukkenmei">
                    {value.name === "" ? <h2>物件名</h2> : <h2>{value.name}</h2>}
                </div>
                <div className="preview-yachin">
                    {value.price === 0 ? <h2>家賃</h2> : <h2>{value.rent}円</h2>}
                </div>
            </div>
            <div className="preview-body">
                <div className="preview-images">
                    <div className="preview-gaikan">
                        <h2>外観</h2>
                        {imageUrl && (
                        <img src={imageUrl} alt="アップロード画像" width="300" />
                            )}
                    </div>
                    <div className="preview-naikan">
                        <h2>内観</h2>
                        {imageUrl2 && (
                        <img src={imageUrl2} alt="アップロード画像" width="300" />
                            )}
                    </div>
                </div>
                <div className="preview-shosai">
                    <div className="preview-info">
                        <div className="preview-madori">
                            <h2>間取り</h2>
                            {imageUrl3 && (
                        <img src={imageUrl3} alt="アップロード画像" width="300" />
                            )}
                        </div>
                        <div className="preview-otherinfo">
                            <div className="preview-access_placeholder">
                                <h2>アクセス</h2>
                            </div>
                            <div className="preview-joken_placeholder">
                                <h2>契約条件</h2>
                                <h2>必須条件</h2>
                            </div>
                        </div>
                    </div>
                    <div className="preview-bukken_info_placeholder">
                        <h2>物件情報</h2>
                    </div>                    
                </div>
            </div>
        </div>
    );
}