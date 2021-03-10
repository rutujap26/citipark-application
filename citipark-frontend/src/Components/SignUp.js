import React from "react";
import classnames from "classnames";
import { NavLink } from 'react-router-dom'
import { addUser } from '../actions/SignUpAction'
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import './CSS/style.css'
const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    userName: "",
    password: "",
    
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    mobileError: "",
    userNameError: "",
    passwordError: "",
    
    errors: {}

}
class SignUp extends React.Component {
    state = initialState;

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });

    }

    handleFormValidation() {

        const emailRegex = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        const mobileRegex = RegExp(/^[6-9][0-9]{9}$/);
        const passwordRegex = RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);


        let firstNameError = "";
        let lastNameError = "";
        let emailError = "";
        let mobileError = "";
        let userNameError = "";
        let passwordError = "";
       


        if (!this.state.firstName) {
            firstNameError = "First Name is required";
        }
        else if (this.state.firstName.length < 3) {
            firstNameError = "First Name must be at least 3 characters";
        }
        if (!this.state.lastName) {
            lastNameError = "Last Name is required";
        }
        else if (this.state.lastName.length < 3) {
            lastNameError = "Last Name must be at least 3 characters";
        }

        if (!this.state.email) {
            emailError = "Email is required";
        }
        else if (!this.state.email.match(emailRegex)) {
            emailError = "Invalid email";
        }

        if (!this.state.mobile) {
            mobileError = "Mobile is required";
        }
        else if (!this.state.mobile.match(mobileRegex)) {
            mobileError = "Invalid mobile number";
        }
        if (!this.state.userName) {
            userNameError = "User Name is required";
        }
        else if (this.state.userName.length < 8) {
            userNameError = "User Name must be at least 8 characters";
        }
        if (!this.state.password) {
            passwordError = "Password is required";
        }
        else if (!this.state.password.match(passwordRegex)) {
            passwordError = "Password must be at least 8 characters with A-Z,a-z,0-9 and @*&#$";
        }

       
        if (firstNameError || lastNameError || emailError || mobileError || userNameError || passwordError) {
            this.setState({ firstNameError, lastNameError, emailError, mobileError, userNameError, passwordError });
            return false;
        }
        return true;

    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors })
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const isValid = this.handleFormValidation();
        if (isValid) {
            alert('User Registered Successfully');
            const newUser = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                mobile: this.state.mobile,
                userName: this.state.userName,
                password: this.state.password,
                role: this.state.role
            }
            this.props.addUser(newUser, this.props.history);
            console.log(this.state);
            this.setState(initialState);
        }
        console.log("----------------submit button clicked------------------");
       
    }
    render() {
        const { errors } = this.state;
        return (
            <div className="userbody">
                <form onSubmit={this.handleSubmit}>
                    <h2 className="userHeading">User Registration</h2><br />

                    <div className="form-group">
                        <input type="text"   name="firstName"
                            className={classnames("form-control userinput ",
                                { "is-invalid": this.state.firstNameError })}
                            value={this.state.firstName}

                            placeholder="First Name"
                            onChange={this.handleChange}
                        />
                        <div className="text-danger userpwd">{this.state.firstNameError}</div>

                    </div>

                    <div className="form-group">
                        <input type="text"  name="lastName"
                            className={classnames("form-control userinput ",
                                { "is-invalid": this.state.lastNameError })}
                            value={this.state.lastName}

                            placeholder="Last Name"
                            onChange={this.handleChange}
                        />
                        <div className="text-danger userpwd">{this.state.lastNameError}</div>

                    </div>

                    <div className="form-group">
                        <input type="text"   name="email"
                            className={classnames("form-control userinput ",
                                { "is-invalid": this.state.emailError })}
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleChange} />
                        <div className="text-danger userpwd">{this.state.emailError}
                        {errors.userName && <div className="text-danger">{errors.userName}</div>}</div>
                    </div>

                    <div className="form-group">
                        <input type="text"   name="mobile"
                            className={classnames("form-control userinput", 
                                { "is-invalid": this.state.mobileError })}
                            placeholder="Mobile"
                            value={this.state.mobile}
                            onChange={this.handleChange} />
                        <div className="text-danger userpwd">{this.state.mobileError}</div>
                    </div>

                    <div className="form-group">
                        <input type="text"   name="userName"
                            className={classnames("form-control userinput ",
                                { "is-invalid": this.state.userNameError })}
                            placeholder="User Name"
                            value={this.state.userName}
                            onChange={this.handleChange} />
                        <div className="text-danger userpwd">{this.state.userNameError}</div>
                    </div>

                    <div className="form-group">
                        <input type="password"  name="password"
                            className={classnames("form-control userpassword ",
                                { "is-invalid": this.state.passwordError })}
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChange} />
                        <div className="text-danger userpwd">{this.state.passwordError}</div>
                    </div>

                   
                    <div className="userButton">
                    <input type="submit" className="btn  btn-primary btn-lg" value="Sign In" />
                    </div>
                    <div className="loginredirect">
                    <p className="float-left text-dark ">
                        Already have an account? <NavLink to="Login">Login</NavLink>
                    </p>
                </div>
                </form>
               
            </div>
        );
    }
}
SignUp.propTypes = {
    addUser: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    errors: state.errors
})
export default connect(mapStateToProps, { addUser })(SignUp);