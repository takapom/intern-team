import "../style/Preview.css";
import { useContext } from "react";
import { InformationContext } from "../App";
import { formatNumber } from "../utils/formatnumber";

export default function Preview() {
    const [propertyInfo] = useContext(InformationContext);
    let NaikanImage, GaikanImage, MadoriImage;
    propertyInfo.exterior ? (NaikanImage = URL.createObjectURL(propertyInfo.exterior)) : (NaikanImage = null);
    propertyInfo.interview ? GaikanImage = URL.createObjectURL(propertyInfo.interview) : GaikanImage = null;
    propertyInfo.floor ? MadoriImage = URL.createObjectURL(propertyInfo.floor) : MadoriImage = null;
    return (
        <div className="preview-main" id="pdf">
            <div className="preview-header">
                <div className="preview-bukkenmei">
                    {!propertyInfo.name ? <h2>物件名</h2> : <p>{propertyInfo.name}</p>}
                </div>
                <div className="preview-yachin">
                    {!propertyInfo.rent ? <h2>家賃</h2> : <p>賃料: <b>{formatNumber(propertyInfo.rent)}円</b></p>}
                </div>
            </div>
            <div className="preview-body">
                <div className="preview-images">
                    <div className="preview-gaikan">
                        {!NaikanImage && <h2>外観</h2>}
                        {NaikanImage && <img src={NaikanImage} style={{ height: "16em", width: "23em" }} />}
                    </div>
                    <div className="preview-naikan">
                        {!GaikanImage && <h2>内観</h2>}
                        {GaikanImage && <img src={GaikanImage} style={{ height: "16em", width: "23em" }} />}
                    </div>
                </div>
                <div className="preview-shosai">
                    <div className="preview-info">
                        <div className="preview-madori">
                            {!MadoriImage && <h2>間取り</h2>}
                            {MadoriImage && <img src={MadoriImage} style={{ height: "25em", width: "19.75em" }} />}
                        </div>
                        <div className="preview-otherinfo">
                            {!propertyInfo.address
                                ? <div className="preview-access_placeholder">
                                    <h2>アクセス</h2>
                                </div>
                                : <div className="preview-access">
                                    <h3>所在地</h3>
                                    <p>{propertyInfo.address}</p>
                                    {propertyInfo.station && (
                                        <>
                                            <h3>最寄駅</h3>
                                            <p>{propertyInfo.station}</p>
                                        </>
                                    )}
                                </div>
                            }

                            {!propertyInfo.deposit
                                ? <div className="preview-joken_placeholder">
                                    <h2>契約条件</h2>
                                    <h2>必須条件</h2>
                                </div>
                                : <div className="preview-joken">
                                <p>敷金/礼金: <b>{formatNumber(propertyInfo.deposit)}円</b></p>
                                {propertyInfo.new && (
                                    <p>更新料: <b>{formatNumber(propertyInfo.new)}円</b></p>
                                )}
                                {propertyInfo.contract && (
                                    <p>契約期間: <b>{propertyInfo.contract}年</b></p>
                                )}
                                {propertyInfo.park && (
                                    <p>駐車場: <b>{propertyInfo.park}</b></p>
                                )}
                                {propertyInfo.insurance && (
                                    <p>保険加入: <b>{propertyInfo.insurance}</b></p>
                                )}
                                </div>
                            }
                        </div>
                    </div>
                    {!propertyInfo.area
                        ? <div className="preview-bukken_info_placeholder">
                            <h2>物件情報</h2>
                        </div>
                        : <div className="preview-bukken_info">
                            <div className="preview-bukken_info_left">
                            <p>面積: <b>{propertyInfo.area} ㎡</b></p>
                            {propertyInfo.published && (
                                <p>公開日: <b>{propertyInfo.published}</b></p>
                            )}
                            </div>
                            <div className="preview-bukken_info_right">
                            </div>
                        </div>
                    }

                </div>
            </div>
        </div>
    );
}