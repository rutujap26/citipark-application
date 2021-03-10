import React, {useState} from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";


const CardPaymentForm = ({history}) => {
    const [data, setData] = useState({
        cvv: "",
        expiry: "",
        name: "",
        number: ""
    });
    const [expiry,setExpiry]=useState(new Date());
    const [error, setError] = useState({
        cvv: "",
        date:"",
        month:"",
        expiry: "",
        name: "",
        number: ""
    });

    const handleInputChange = (e) => {
        if (e.target.name === "number") {
            const re = /^[0-9\b]+$/;
            if (e.target.value === '' || re.test(e.target.value)) {
                setError({
                    ...error,
                    [e.target.name]: ""
                });
                setData({
                    ...data,
                    [e.target.name]: e.target.value
                });
            }
        } else if (e.target.name === "cvv") {
            const re = /^[0-9\b]+$/;
            if (e.target.value === '' || re.test(e.target.value)) {
                setError({
                    ...error,
                    [e.target.name]: ""
                });
                setData({
                    ...data,
                    [e.target.name]: e.target.value
                });

            }
        } else if (e.target.name === "expiry") {
            const re = /^[0-9/\b]+$/;
            if(e.target.value.length===2 && data.expiry.length===1){
                e.target.value+="/"
            }else if(e.target.value.length===3 && data.expiry.indexOf("/")===2) {
                e.target.value=e.target.value.substr(0,1)[0]
            }
            if (e.target.value === '' || re.test(e.target.value)) {
                setError({
                    ...error,
                    [e.target.name]: ""
                });
                setData({
                    ...data,
                    [e.target.name]: e.target.value
                });

            }
        } else {
            setError({
                ...error,
                [e.target.name]: ""
            });
            setData({
                ...data,
                [e.target.name]: e.target.value
            });
        }
    };
    
    const handlePay = () => {
        setError({
            cvv: (data.cvv.trim() === "") ? "CVV must not be empty" :  data.cvv.trim().length !== 3?"CVV must be 3 digits":"",
            name: (data.name.trim() === "") ? "Name should not be empty" : "",
            expiry: (data.expiry.trim() === "" ) ? "Expiry should not be empty" : data.expiry.trim().length !== 5?"Expiry month and year invalid":"",
            number: (data.number.trim() === "") ? "Number must not empty" : data.number.trim().length < 12 ? "Number invalid" : ""
        })
        if ((error.cvv === "" && error.number === "" && error.expiry === "" && error.name === "") && (data.cvv.length === 3 && data.number.length === 16 && data.expiry.length ===5 && data.name !== "")) {
            history.push("/payment/otp")
        }
    };

    return (
        
            <div className={"container card"} style={{padding: 20}}>
                <h4 style={{color: "#424242", textAlign: "center"}}>CREDIT/DEBIT</h4>
                <form>
                    <div className="form-group">
                        <label>CARD NUMBER</label>
                        <input
                            type="text"
                            name="number"
                            maxLength={16}
                            minLength={16}
                            value={data.number}
                            className={"form-control"}
                            onChange={handleInputChange}
                        />
                        {error.number !== "" ?
                            <p style={{
                                color: "#d93838"
                            }}>
                                {error.number}
                            </p> : null}
                    </div>
                    <div className="form-group">
                        <label>NAME ON CARD</label>
                        <input
                            type="text"
                            name="name"
                            className={"form-control"}
                            onChange={handleInputChange}
                        />
                        {error.name !== "" ?
                            <p style={{
                                color: "#d93838"
                            }}>
                                {error.name}
                            </p> : null}
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-6">
                            <label>EXPIRY DATE</label>
                            <input
                                type="text"
                                name="expiry"
                                maxLength="5"
                                placeholder="(MM/YY)"
                                className={"form-control"}
                                value={data.expiry}
                                onChange={handleInputChange}
                            />
                            {error.expiry !== "" ?
                                <p style={{
                                    color: "#d93838"
                                }}>
                                    {error.expiry}
                                </p> : null}
                        </div>
                        <div className="col-sm-6">
                            <label>CVV</label>
                            <input
                                type="text"
                                name="cvv"
                                value={data.cvc}
                                maxlength="3"
                                className={"form-control"}
                                onChange={handleInputChange}
                            />
                            {error.cvv !== "" ?
                                <p style={{
                                    color: "#d93838"
                                }}>
                                    {error.cv}
                                </p> : null}
                        </div>
                    </div>
                </form>
                <div className="form-group">
                    <center>
                        <button className={"btn btn-primary"} style={{padding: "5px 2 0px"}} onClick={handlePay}>Pay
                        </button>
                    </center>
                </div>
            
        </div>
    );
};

export default CardPaymentForm;