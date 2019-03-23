import React, {Component} from 'react';
import axios from 'axios';
import isEmailValid from '../../utilities/emailValidation';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      errorMsg: '',
    };
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    let value = e.target.value,
        name = e.target.name;
    this.setState({[name]: value});
  }

  handleSignUp(e) {
    e.preventDefault();
    let { firstName, lastName, email, username, password, confirmPassword } = this.state;
    let { handleRedirect } = this.props;

    if (firstName.length && lastName.length && email.length && 
      username.length && password.length && confirmPassword.length) {
        if (!isEmailValid(email)) {
          this.setState({
            password: '',
            confirmPassword: '',
            errorMsg: 'Please enter valid email.'
          });
        } else if (password !== confirmPassword) {
          this.setState({
            password: '',
            confirmPassword: '',
            errorMsg: 'Password do not match.'
          });
        } else {
          let userData = {
            firstName,
            lastName,
            email,
            username,
            password
          }

          axios.post('http://localhost:3005/register', userData)
          .then((response) => handleRedirect('SIGNUP', 'INTRODUCTION'))
          .catch((err) => {
            this.setState({
              password: '',
              confirmPassword: '',
              errorMsg: err.response.data
            });
          });
        }
    } else {
      this.setState({
        password: '',
        confirmPassword: '',
        errorMsg: 'All fields are required.',
      })
    }
  }

  render() {
    let { handlePageChange } = this.props;
    let errorMsg = this.state.errorMsg ? <p className="errorMessages">{this.state.errorMsg}</p> : <p className="errorMessages"></p>;

    return (
      <div className="signup-container">
        <h1>Sign Up</h1>
        {errorMsg}
        <form className="signup-form">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" name="firstName" id="firstName" 
          onChange={this.handleInputChange} 
          value={this.state.firstName} 
          required 
          />
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" name="lastName" id="lastName" 
          onChange={this.handleInputChange} 
          value={this.state.lastName} 
          required 
          />
          <label htmlFor="email">Email Address:</label>
          <input type="email" name="email" id="email" 
          onChange={this.handleInputChange} 
          value={this.state.email} 
          required 
          />
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" id="username" 
          onChange={this.handleInputChange} 
          value={this.state.username} 
          required 
          />
          <label htmlFor="new-password">New Password: </label>
          <input type="password" name="password" id="password" 
          onChange={this.handleInputChange} 
          value={this.state.password} 
          required 
          />
          <label htmlFor="confirm-password">Confirm Password: </label>
          <input type="password" name="confirmPassword" id="confirmPassword" 
          onChange={this.handleInputChange} 
          value={this.state.confirmPassword} 
          required
          />
          <div className="button-arrangement">
            <button type="button" onClick={handlePageChange}>BACK</button>
            <button type="button" onClick={this.handleSignUp}>CONFIRM</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;