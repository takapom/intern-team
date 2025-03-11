import { useContext, useState } from "react";
import "../style/Preview.css";

export default function Preview() {
    return (
        <div className="preview-main">
            <div className="preview-header">
                <div className="preview-bukkenmei">
                    <h2>物件名</h2>
                </div>
                <div className="preview-yachin">
                    <h2>家賃</h2>
                </div>
            </div>
            <div className="preview-body">
                <div className="preview-images">
                    <div className="preview-gaikan">
                        <h2>外観</h2>
                    </div>
                    <div className="preview-naikan">
                        <h2>内観</h2>
                    </div>
                </div>
                <div className="preview-shosai">
                    <div className="preview-info">
                        <div className="preview-madori">
                            <h2>間取り</h2>
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