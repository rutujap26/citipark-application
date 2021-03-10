import React, {useState} from 'react';
import CardPaymentForm from "../Components/CardForm"

const PaymentPage = (props) => {
    const [mode, setMode] = useState(1);
    const [radio, setRadio] = useState("");
    const [error, setError] = useState(false);
    const [formData, setFormData] = useState({netUsername: "", netPass: ""});
    const [formErrors, setFormErrors] = useState({netUsername: "", netPass: ""})
    const [selectedBank, setSelectedBank] = useState("");

    /* Event Handlers */
    const handleChangeNetUsername = (event) => {
        setFormErrors({
            ...formErrors,
            netUsername: ""
        })
        setFormData({
            ...formData,
            netUsername: event.target.value,
        })
    }
    const handleChangeNetPass = (event) => {
        setFormErrors({
            ...formErrors,
            netPass: ""
        })
        setFormData({
            ...formData,
            netPass: event.target.value,
        })
    }
    const handleFormSubmit = () => {
        setFormErrors({
            netUsername: formData.netUsername === "" ? "Username must not be empty" : "",
            netPass: formData.netPass === "" ? "Password must not be empty" : "",
        })
        if (formData.netUsername !== "" && formData.netPass !== "") {
            props.history.push("/payment/otp");
        }
    }
    const handleChange = (event) => {
        setError(false);
        setRadio(event.target.id)
    }
    const handlePay = () => {
        if (radio.trim().length === 0) {
            setError(true);
        } else {
            props.history.push("/payment/otp");
        }
    }
    const handleBankSelect = (event) => {
        setSelectedBank(event.target.value)
    }

    return (
        <div>
            <div>
                <h2 style={{color: '#3d3d3d', textAlign: "center"}}>PAYMENT</h2>
            </div>
            <div className={"container"}>
                <div className={'row'}>
                    <div className={"col-sm-4 container card"}
                         style={{height: "400px", display: "flex", flexDirection: "column"}}>
                        <span style={{padding: '10px 5px'}}>
                            <button type="button" className="btn btn-primary btn-block"
                                    onClick={() => setMode(1)}>CREDIT/DEBIT CARD</button>
                        </span>
                        <br></br>
                        <span style={{padding: '10px 5px'}}>
                            <button type="button" className="btn btn-primary btn-block"
                                    onClick={() => setMode(2)}>NETBANKING</button>
                        </span>
                        <br></br>
                        <span style={{padding: '10px 5px'}}>
                            <button type="button" className="btn btn-primary btn-block"
                                    onClick={() => setMode(3)}>UPI</button>
                        </span>
                        <br></br>
                        <span style={{padding: '10px 5px'}}>
                            <button type="button" className="btn btn-primary btn-block"
                                    onClick={() => setMode(4)}>WALLET</button>
                        </span>
                    </div>
                    <div className={"col-sm"}>
                        {mode === 1 ?
                            <CardPaymentForm history={props.history}/>
                            : mode === 2 ? <div className={"container card"} style={{padding: "5px"}}>
                                    <h4 style={{color: "#424242", textAlign: "center"}}>NETBANKING</h4>
                                    <div className={"card-body"}>
                                        <select className="form-control" aria-label="Default select example"
                                                onChange={handleBankSelect}>
                                            <option selected>SELECT YOUR BANK</option>
                                            <option value="Andhra">ANDHRA BANK</option>
                                            <option value="Axis">AXIS BANK</option>
                                            <option value="HDFC">HDFC BANK</option>
                                            <option value="ICICI">ICICI BANK</option>
                                            <option value="Indian">INDIAN BANK</option>
                                            <option value="Sbi">STATE BANK OF INDIA</option>
                                            <option value="Union">UNION BANK</option>
                                        </select>
                                    </div>
                                    {selectedBank !== "" ?
                                        <div className="card-body">
                                            <hr/>
                                            <h4 style={{textAlign:"center",color:"#424242"}}>{selectedBank+" Bank"}</h4>
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="netbankingid">NETBANKING ID</label>
                                                    <input type="text" className="form-control" id="netbankingid"
                                                           onChange={handleChangeNetUsername} maxLength={18}
                                                           />
                                                    {formErrors.netUsername !== "" ? <p style={{
                                                        color: "#d93838"
                                                    }}>{formErrors.netUsername}</p> : null}
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="netbankingpassword">PASSWORD</label>
                                                    <input type="password" className="form-control"
                                                           id="exampleInputPassword1"
                                                           onChange={handleChangeNetPass} maxLength={18}
                                                           />

                                                    {formErrors.netPass !== "" ? <p style={{
                                                        color: "#d93838"
                                                    }}>{formErrors.netPass}</p> : null}
                                                </div>
                                            </form>
                                            <button onClick={handleFormSubmit}
                                                    className="btn btn-primary">PAY
                                            </button>
                                        </div>
                                        : null}
                                </div>
                                : mode === 3 ?
                                    <div className={"container card"} style={{padding: "10px", height: "400px"}}>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="phonepe"
                                                   id="phonepe" onChange={handleChange}
                                                   checked={radio === "phonepe" ? true : false}/>
                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                PHONEPE
                                            </label>
                                        </div>
                                        <br></br>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="gpay"
                                                   id="gpay" onChange={handleChange}
                                                   checked={radio === "gpay" ? true : false}/>
                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                GPAY
                                            </label>
                                        </div>
                                        <br></br>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="upi"
                                                   id="upi" onChange={handleChange}
                                                   checked={radio === "upi" ? true : false}/>
                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                BHIM UPI
                                            </label>
                                        </div>

                                        <div>
                                            {error ? <p style={{
                                                color: "#d93838"
                                            }}>Select an option</p> : null}
                                        </div>
                                        <br></br>
                                        <div className={"form-check"}>
                                            <button className={"btn btn-primary"} onClick={handlePay}>
                                                PAY
                                            </button>
                                        </div>
                                    </div>
                                    
                                    : mode === 4 ?
                                    <div className={"container card"} style={{padding: "10px", height: "400px"}}>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="paytm"
                                                   id="paytm" onChange={handleChange}
                                                   checked={radio === "paytm" ? true : false}/>
                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                PAYTM
                                            </label>
                                        </div>
                                        <br></br>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="payzapp"
                                                   id="payzapp" onChange={handleChange}
                                                   checked={radio === "payzapp" ? true : false}/>
                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                PAYZAPP
                                            </label>
                                        </div>
                                        <br></br>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="mobiwiki"
                                                   id="mobiwiki" onChange={handleChange}
                                                   checked={radio === "mobiwiki" ? true : false}/>
                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                MOBIWIKI
                                            </label>
                                        </div>
                                        <br></br>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="olamoney"
                                                   id="olamoney" onChange={handleChange}
                                                   checked={radio === "olamoney" ? true : false}/>
                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                OLAMONEY
                                            </label>
                                        </div>

                                        <div>
                                            {error ? <p style={{
                                                color: "#d93838"
                                            }}>Select an option</p> : null}
                                        </div>
                                        <br></br>
                                        <div className={"form-check"}>
                                            <button className={"btn btn-primary"} onClick={handlePay}>
                                                PAY
                                            </button>
                                        </div>
                                    </div>
                                     : null}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PaymentPage;