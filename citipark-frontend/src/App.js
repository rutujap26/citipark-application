
import './App.css';
import HeaderComponent from './Components/Layout/HeaderComponent';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-fontawesome";
import { Switch, Redirect, Route} from 'react-router-dom';
import ParkingSlot from './Components/ParkingSlot';
import {Provider} from 'react-redux';
import store from './store'

import FooterComponent from './Components/Layout/FooterComponent';
import Dashboard from './Components/Dashboard';
import ParkingSlotDashboard from './Components/ParkingSlotDashboard';
import UpdateSlot from './Components/UpdateSlot';
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import AdminComponent from './Components/AdminComponent'
import AddParkingPremise from './Components/AddParkingPremise'
import UpdateParkingPremise from './Components/UpdateParkingPremise'
import PaymentPage from './pages/payment';
import OtpPage from './pages/otp'
import PaymentSuccessPage from './pages/succesfull'
import AddPayment from './pages/AddPayment'
import UserDashboard from './Components/UserDashboard'
import VehicleDashboard from './Components/VehicleDashboard'
import AddVehicle from './Components/projects/AddVehicle'
import UpdateVehicle from './Components/projects/UpdateVehicle'
import FloorDashboard from './Components/FloorDashboard'
import AddFloor from './Components/projects/AddFloor'
import UpdateFloor from './Components/projects/UpdateFloor'




function App() {
  
  return (
     <Provider store={store}>
    <div>
    
    <HeaderComponent />
    
    <Switch>

      <Route path="/parkingSlot" component={ParkingSlot}/>
      <Route path="/parkingSlotDashboard" component={ParkingSlotDashboard}/>
      <Route path="/" exact component={Dashboard} />
      <Route path="/updateSlot/:id" component={UpdateSlot}/>
     
      <Redirect from="/dashboard" to="/"/>
   
        {/*Esha*/}
      <Route path="/login" component={Login} />
      <Route path="/signUp" component={SignUp} />
      <Route path="/userDashboard" component={UserDashboard} />
    {/*Rutuja*/}
      <Route path="/adminComponent" component={AdminComponent} />
            <Route path="/addParkingPremise" component={AddParkingPremise} />
            <Route path="/updateParkingPremise/:id" component={UpdateParkingPremise} />

            {/*Sasi*/}
            <Route exact path="/payment/mode" component={PaymentPage}/>
            <Route exact path="/payment/otp" component={OtpPage}/>
            <Route exact path="/payment/success" component={PaymentSuccessPage}/>
             <Route exact path="/payment" component={AddPayment}/> 


             <Route path="/vehicleDashboard" component={VehicleDashboard} />
          <Route path="/addVehicle" component={AddVehicle} />
          <Route path="/updateVehicle/:vehicleId" component={UpdateVehicle} />



          <Route path="/floorDashboard" component={FloorDashboard} />
          <Route path="/addFloor" component={AddFloor} />
          <Route path="/updateFloor/:vehicleId" component={UpdateFloor} />

     </Switch>
     
     <FooterComponent></FooterComponent>
    </div>
     </Provider>
  );
}

export default App;
