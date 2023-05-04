import { PaymentDesc } from "./type"

import '../../css/paymentMain.css'
type paymentDescc = {
        paymentDesc: PaymentDesc;
  }
const PlaymentRitght:React.FC<paymentDescc>=(props) => {
    
    const {paymentDesc} =props
    return(
        <>
        <div className="payment-items-introduce">
                <div className="payment-introduce">
                        <div className="banner">
                                <div className="bannerTitle">
                                        <span>{paymentDesc.title} </span>
                                </div>
                                <div className="bannerProfess">
                                        <div className="logo-wrapper">
                                        <div className="logo-banner">

                                        </div>
                                        </div>  
                                        <div className="profess-wrapper">
                                            <label>{paymentDesc.desc_0}</label>
                                            <span>{paymentDesc.title_professional}</span>
                                        </div>
                                </div>  
                        </div>
                        <div className="introduce-text">
                            <div className="ul-wrapper">
                                        <ul>
                                            <li>{paymentDesc.desc_1}</li>
                                            <li>{paymentDesc.desc_2}</li>
                                            <li>{paymentDesc.desc_3}</li>
                                            <li>{paymentDesc.desc_4}</li>
                                        </ul>
                            </div>
                        </div>
                </div>
        </div>

        </>
        )
}

export default PlaymentRitght