import React from 'react'
import classnames from 'classnames';
import { getUser } from '../actions/SignUpAction'
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import './CSS/style.css'
import loginlogo from '../images/loginlogo.png';

const initialState = {
    userName: "",
    password: "",
    userNameError: "",
    passwordError: "",
    errors: {}
}
class Login extends React.Component {
    state = initialState;

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });

    }
    handleFormValidation() {
        let userNameError = "";
        let passwordError = "";
        if (!this.state.userName) {
            userNameError = "User Name is required";
        }
        if (!this.state.password) {
            passwordError = "Password is required";
        }
        if (userNameError || passwordError) {
            this.setState({ userNameError, passwordError });
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
            const newUser = {
                userName: this.state.userName,
                password: this.state.password,
            };
            /*  this.props.addUser(this.state.userName, this.state.password);
              alert('User Logged In Successfully');
              console.log(this.state);
              this.setState(initialState);*/
            this.props.getUser(newUser, this.props.history);
        }
        
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="userbody">
                <form onSubmit={this.handleSubmit}>
                    <h2 className="userHeading">Login</h2><br />
                    
                    <img src={loginlogo} width="55%" alt="logo" /><br /><br/>
                    

                    <div className="form-group">
                        <input type="text" name="userName"
                            className={classnames("form-control userinput",
                                { "is-invalid": this.state.userNameError })}
                            placeholder="User Name"
                            value={this.state.userName}
                            onChange={this.handleChange} />
                        {errors.userName && (
                            <div className="invalid-feedback">
                                {errors.userName}
                            </div>)}
                        <div className="text-danger userpwd ">{this.state.userNameError}</div>


                    </div>

                    <div className="form-group">
                        <input type="password"  name="password"
                            className={classnames("form-control userpassword  ",
                                { "is-invalid": this.state.passwordError })}
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChange} />
                        <div className="text-danger userpwd ">{this.state.passwordError}</div>
                    </div>

                            <div className="userButton">
                    <input type="submit" className="btn  btn-primary btn-lg" value="Sign In" />
                    </div>

                </form>

            </div>
        );
    }
}
Login.propTypes = {
    getUser: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    errors: state.errors
})
export default connect(mapStateToProps, { getUser })(Login);




