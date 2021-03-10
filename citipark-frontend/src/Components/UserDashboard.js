import React from 'react'
import classnames from 'classnames';
import './CSS/style.css'
class UserDashboard extends React.Component {
    render() {
        return (
            <div>
               
                <div className="boxUser" >
                    <i className="fa fa-car fa-5x d-flex justify-content-center" aria-hidden="true"></i>
                    <h2 className="text-center">&nbsp; <a className="linksUser" href="/vehicleDashboard"> My Vehicles</a></h2>
                </div>

                



            </div>


        );

    }
}
export default UserDashboard