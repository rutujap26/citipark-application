import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import{Carousel} from 'react-bootstrap'
import swal from 'sweetalert'


class Dashboard extends Component {
  onButtonClick()
  {
    swal(" ", {
      buttons: {
        cancel: "Amazing",
        catch: {
          text: "Can Improve",
          value: "catch",
        },
        defeat: false,
      },
    })
    .then((value) => {
      switch (value) {
     
        case "defeat":
          swal("Pikachu fainted! You gained 500 XP!");
          break;
     
        case "catch":
          swal("Sure! We will Improve");
          break;
     
        default:
          swal("Glad that you are happy!");
      }
    });
  }
    render() {
        return (
            
            <div className="dash-body">
           
  
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 first"
      src="https://images.pexels.com/photos/6147/cars-red-car-parking.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      width="50%"
      height="40%"

      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className="text-dark"><b>Hassle Free Parking</b></h3>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://thumbs.dreamstime.com/b/two-wheeler-parking-city-palace-udaipur-rajasthan-59666937.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className="text-dark"><b>Safe and Secure</b></h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.istockphoto.com/photos/underground-parking-garage-with-various-cars-picture-id1196258168?b=1&k=6&m=1196258168&s=170667a&w=0&h=apGBo3kIsRlvPSCKLEfBAjy4XyThIaQQscOP8fzndzc="
      alt="Third slide"
    />

    <Carousel.Caption>
      <h1 className="text-dark"><b>Enjoy More</b></h1>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    <br />
<div className="box" >
<i className="fa fa-search fa-5x d-flex justify-content-center" aria-hidden="true"></i>
<div><h2> 	&nbsp; &nbsp;&nbsp; Find Your Slots</h2></div>
</div>
<div className="box" >
<i className="fa fa-credit-card fa-5x d-flex justify-content-center" aria-hidden="true" ></i>
<h2>&nbsp; &nbsp;&nbsp;Pay for the slot</h2>
</div>
<div className="box" >
<i className="fa fa-car fa-5x d-flex justify-content-center"  aria-hidden="true"></i>
<h2>&nbsp; &nbsp;&nbsp;Park your vehicle</h2>

</div>

<div className="review">
<div class="container d-flex justify-content-center mt-5">
    <div class="card text-center mb-5">
        <div class="circle-image"> <img src="https://i.imgur.com/zLnZO6u.png" width="50" />
         </div> <span class="help-text mb-1 fw-500">Thankyou</span> 
        <div class="buttons mb-3 mt-4 px-5"> <button class="btn btn-outline-dark btn-block" onClick={()=>this.onButtonClick()}>How did you like it?</button>  </div>
    </div>
</div>
</div>



</div>




        )
    }
}
export default Dashboard;