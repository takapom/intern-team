import "../style/Preview.css";
import { useContext } from "react";
import { InformationContext } from "../App";
import { formatNumber } from "../utils/formatnumber";

export default function Preview() {
    const [properyInfo] = useContext(InformationContext);
    let NaikanImage, GaikanImage, MadoriImage;
    properyInfo.exterior ? (NaikanImage = URL.createObjectURL(properyInfo.exterior)) : (NaikanImage = null);
    properyInfo.interview ? GaikanImage = URL.createObjectURL(properyInfo.interview) : GaikanImage = null;
    properyInfo.floor ? MadoriImage = URL.createObjectURL(properyInfo.floor) : MadoriImage = null;
    return (
        <div className="preview-main" id="pdf">
            <div className="preview-header">
                <div className="preview-bukkenmei">
                    {!properyInfo.name ? <h2>物件名</h2> : <p>{properyInfo.name}</p>}
                </div>
                <div className="preview-yachin">
                    {!properyInfo.rent ? <h2>家賃</h2> : <p>賃料: <b>{formatNumber(properyInfo.rent)}円</b></p>}
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
                            {!properyInfo.address
                                ? <div className="preview-access_placeholder">
                                    <h2>アクセス</h2>
                                </div>
                                : <div className="preview-access">
                                    <h3>所在地</h3>
                                    <p>{properyInfo.address}</p>
                                    {properyInfo.station && (
                                        <>
                                            <h3>最寄駅</h3>
                                            <p>{properyInfo.station}</p>
                                        </>
                                    )}
                                </div>
                            }
                            {!properyInfo.deposit
                                ? <div className="preview-joken_placeholder">
                                    <h2>契約条件</h2>
                                    <h2>必須条件</h2>
                                </div>
                                : <div className="preview-joken">
                                <p>敷金/礼金: <b>{formatNumber(properyInfo.deposit)}円</b></p>
                                {properyInfo.new && (
                                    <p>更新料: <b>{formatNumber(properyInfo.new)}円</b></p>
                                )}
                                {properyInfo.contract && (
                                    <p>契約期間: <b>{properyInfo.contract}年</b></p>
                                )}
                                {properyInfo.park && (
                                    <p>駐車場: <b>{properyInfo.park}</b></p>
                                )}
                                {properyInfo.insurance && (
                                    <p>保険加入: <b>{properyInfo.insurance}</b></p>
                                )}
                                </div>
                            }
                        </div>
                    </div>
                    {!properyInfo.area
                        ? <div className="preview-bukken_info_placeholder">
                            <h2>物件情報</h2>
                        </div>
                        : <div className="preview-bukken_info">
                            <div className="preview-bukken_info_left">
                            <p>面積: <b>{properyInfo.area} ㎡</b></p>
                            {properyInfo.published && (
                                <p>公開日: <b>{properyInfo.published}</b></p>
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