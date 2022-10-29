import React, { useEffect, useState } from "react";
import "../../res/css/footer.css"
import footer1 from "../../res/images/footer/Vector.png"
import footer2 from "../../res/images/footer/footer2.png"
import footer3 from "../../res/images/footer/footer3.png"
import footer4 from "../../res/images/footer/footer4.png"

export default function Footer() {

    return (
        <>
            <div className="footer">
                <div className="row">
                    <div className="col-3 footercol">
                        <img className="footerIcon" src={footer1} alt="" />
                    </div>
                    <div className="col-3 footercol">
                        <img className="footerIcon" src={footer2} alt="" />
                    </div>
                    <div className="col-3 footercol">
                        <img className="footerIcon" src={footer3} alt="" />
                    </div>
                    <div className="col-3 footercol">
                        <img className="footerIcon" src={footer4} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}