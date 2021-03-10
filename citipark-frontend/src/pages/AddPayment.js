import React  from 'react'


const AddPayment = (props) => {
        return(
            <div className={"container"}>
               
                <h1 className="text-center" style={{ color: '#xdxdxd' }}>PAYMENT FOR BOOKING</h1>
                <br></br>
                <br></br>
                <br></br>
                <div class="text-center">
                    <button className="btn btn-primary"  onClick={()=>{props.history.push("/payment/mode")}} >MAKE PAYMENT</button>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <h2 className="text-center" style={{ color: '#xdxdxd' }}>MAKE YOUR PAYMENT BY CLICKING ON ABOVE BUTTON "MAKEPAYMENT" FOR BOOKING YOUR PARKINGSLOT</h2>
            </div>
            
            
           
        )
}
export default AddPayment