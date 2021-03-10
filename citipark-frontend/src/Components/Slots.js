
import React, { Component } from 'react';
import {Card, Table,Button} from 'react-bootstrap';
import {getSlots} from '../actions/ParkingActions';
import {Link} from 'react-router-dom';
import {deleteSlots} from '.././actions/ParkingActions';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import swal from 'sweetalert';

 class Slots extends Component {
   
    onDeleteClick(id){
      console.log('------------------Delete'+id);
      this.props.deleteSlots(id);
      swal("Slot has been deleted "+" :" +id," ", "warning");
    }

    render() {
        const{slots}=this.props;
        return (
          <div className="col-sm-9 header">
          <br />
  
          <h1>Parking Slots</h1>
          <Table bordered hover striped variant="dark">
          <thead>
              <tr>
                  <th>ParkingSlotId</th>
                  <th colSpan="3">Booking Date</th>
                  <th colSpan="3">Parking Date</th>
                  <th colSpan="3">Parking Duration</th>
                  <th colSpan="2">Parking Time</th>
                  <th colSpan="3" className="text-center">Actions</th>
                  
              </tr>
          </thead>
          <tbody>
              {this.props.data.map((value,index)=>{
                  return(
                      <tr key={index}>
                          <td>{value.parkingSlotId}</td>
                          <td colSpan="3">{value.bookingDate}</td>
                          <td colSpan="3">{value.parkingDate}</td>
                          <td colSpan="3">{value.parkingDuration}</td>
                          <td colSpan="2">{value.parkingTime}</td>
                          
                         
                       
                         
                          

                          <Link to={`/updateSlot/${value.parkingSlotId}`}>
                          <td> <Button variant="danger">UPDATE</Button></td>
                          </Link>
                          
                         <td><Button variant ="success" onClick={()=>this.onDeleteClick(value.parkingSlotId)}>DELETE</Button></td>
                         <td><Button variant ="success" href="/payment">PAY</Button></td>
                          
                          
                         
                      </tr>
                  )
              })

              }
          </tbody>
      </Table>
      </div>
         
        )
    }
}
Slots.propTypes={
  deleteSlots:PropTypes.func.isRequired

}
export default connect(null,{deleteSlots}) (Slots);