import React from "react";
import paymentSuccessImg from "../images/paymentSuccess.png"

const paymentSuccessPage = () => {
    return(
        <div className={"container"} style={{textAlign:"center"}}>
            <img src={paymentSuccessImg} alt="Payment successful" width={300}/>
            <h2>PAYMENT SUCCESSFUL</h2>
        </div>
    )
}

export default paymentSuccessPage;