import React from "react";
import { PaymentIntroduce } from "./type";
import './introduce.css'
export default function Introduce(props: PaymentIntroduce) {
    const { title, professtional_plan, introduce_1, introduce_2, introduce_3, introduce_4, modify_plan } = props;
    return <div className='payment-items-introduce'>
        <div className='payment-introduce'>
            <div className="banner">
                <div className="bannerTitle">
                    <span className="span-title">
                        {title}
                    </span>
                </div>
                <div className="bannerProfess">
                    <div className="logo-wrapper">
                        <div className="logo-banner">
                        </div>
                    </div>
                    <div className="profess-wrapper">
                        <label> Professional Plan</label>
                        <span className="span-profess">
                            {professtional_plan}
                        </span>
                    </div>
                </div>
            </div>
            <div className="introduce-text">
           <div className="ul-wrapper">
           <ul>
                    <li>{introduce_1}</li>
                    <li>{introduce_2}</li>
                    <li>{introduce_3}</li>
                    <li>{introduce_4}</li>
                    <span style={{fontSize:'18px',fontWeight:'600',marginTop:'10px'}}>{modify_plan}</span>
                </ul>
           </div>

            </div>
        </div>
    </div>
}