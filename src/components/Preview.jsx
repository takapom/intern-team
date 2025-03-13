import "../style/Preview.css";
import { useContext, useState } from "react";
import { InfomationContext } from "../App";
import { formatNumber } from "../utils/FormatNumber";
import { Judgeimagesize } from "../utils/Judgeimagesize";

export default function Preview() {
    const [value, setValue] = useContext(InfomationContext);
    let imageUrl1 = null;
    if (value.exterior){
        imageUrl1 = URL.createObjectURL(value.exterior);
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
                    {value.name === "" ? <h2>物件名</h2> : <p>{value.name}</p>}
                </div>
                <div className="preview-yachin">
                    {
                        value.rent === 0 ? <h2>家賃</h2> :
                        <p>賃料: <b>{formatNumber(value.rent)}円</b></p>
                    }
                </div>
            </div>
            <div className="preview-body">
                <div className="preview-images">
                    <div className="preview-gaikan">
                        {!imageUrl1 && <h2>外観</h2>}
                        {imageUrl1 && (
                            Judgeimagesize(imageUrl1) ? (
                                <img src={imageUrl1} style={{ height: "14em" }} />
                            ) : (
                                <img src={imageUrl1} style={{ width: "21em" }} />
                            )
                        )}
                    </div>
                    <div className="preview-naikan">
                        {!imageUrl2 && <h2>内観</h2>}
                        {imageUrl2 && (
                            Judgeimagesize(imageUrl2) ? (
                                <img src={imageUrl2} style={{ height: "14em" }} />
                            ) : (
                                <img src={imageUrl2} style={{ width: "21em" }} />
                            )
                        )}
                    </div>
                </div>
                <div className="preview-shosai">
                    <div className="preview-info">
                        <div className="preview-madori">
                            {!imageUrl3 && <h2>間取り</h2>}
                            {imageUrl3 && (
                                Judgeimagesize(imageUrl3) ? (
                                    <img src={imageUrl3} style={{ height: "23em" }} />
                                ) : (
                                    <img src={imageUrl3} style={{ width: "18em" }} />
                                )
                            )}
                        </div>
                        <div className="preview-otherinfo">
                            {
                                value.address === "" ?
                                <div className="preview-access_placeholder">
                                    <h2>アクセス</h2>
                                </div>
                                : <div className="preview-access">
                                    <h3>所在地</h3>
                                    <p>{value.address}</p>
                                    {value.station !== "" && (
                                        <>
                                            <h3>最寄駅</h3>
                                            <p>{value.station}</p>
                                        </>
                                    )}
                                </div>
                            }
                            <div className="preview-joken_placeholder">
                                <div className="preview-joken_placeholder">
                                <p>敷金/礼金: <b>{formatNumber(value.deposit)}円</b></p>
                                <p>更新料: <b>{formatNumber(value.new)}円</b></p>
                                <p>契約期間:  {value.contract}</p>
                                <p>駐車場:  {value.park}</p>
                                <p>保険加入:  {value.insurance}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {value.area === 0 ?
                    <div className="preview-bukken_info_placeholder">
                        <h2>物件情報</h2>
                    </div>
                    :
                    <div className="preview-bukken_info">
                        <div className="preview-bukken_info_left">
                        <p>面積: <b>{value.area} ㎡</b></p>
                        </div>
                        {value.published !== "" && (
                            <p>公開日: <b>{value.published}</b></p>
                        )}
                        <div className="preview-bukken_info_right">
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
}