import React, {useState} from "react";

const OtpPage = (props) => {
    const [otp, setOtp] = useState("")
    const [error, setError] = useState(false);

    /* Event handlers */
    const handleOnChange = (event) => {
        setOtp(event.target.value)
        if (event.target.value.length === 6) {
            setError(false);
        }
    }

    const handleOnSubmit = () => {
        if (otp.length !== 6) {
            setError(true)
        } else {
            setError(false)
            props.history.push("/payment/success")
        }
    }

    return (
        <div className={"container"}>
            <center>
                <div className="card" style={{width: "400px", margin: "100px 0", textAlign: "center"}}>
                    <div className="card-body" style={{padding: "50px 10px"}}>
                        <h4>ENTER OTP</h4>
                        <div>
                            <h6>Amount: &#8360;.400</h6>
                        </div>
                        <div style={{margin: "20px 0"}}>
                            <input className="field-control" maxLength={6} minLength={4} type="password"
                                   onChange={handleOnChange} id="otp"/>
                        </div>
                        <div>
                            {error ? <p style={{
                                color: "#d93838",
                            }}>Otp in valid</p> : null}
                        </div>
                        <div style={{margin: "10px"}}>
                            <button onClick={handleOnSubmit} style={{padding: "0 20px"}}
                                    className={"btn btn-primary"}>Pay
                            </button>
                        </div>
                    </div>
                </div>
            </center>
        </div>
    )
}
export default OtpPage;