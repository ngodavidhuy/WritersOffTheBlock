import React, {Component} from 'react';
import axios from 'axios';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errorMsg: ''
    }

    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    let value = e.target.value,
        name = e.target.name;
    this.setState({[name]: value});
  }

  handleLogIn(e) {
    e.preventDefault();
    let { username, password, errorMsg } = this.state;
    let { handleRedirect } = this.props;
    
    if (username.length && password.length) {
        let userData = {
          username,
          password
        }
        axios.post('http://localhost:3005/login', userData)
        .then((response) => handleRedirect('LOGIN', 'INTRODUCTION'))
        .catch((err) => {
          this.setState({
            password: '',
            errorMsg: err.response.data
          });
        });
    } else {
      this.setState({
        password: '',
        errorMsg: 'All fields are required.',
      });
    }
  }

  render() {

    const { handlePageChange } = this.props;
    let errorMsg = this.state.errorMsg ? <p className="errorMessages">{this.state.errorMsg}</p> : <p className="errorMessages"></p>;

    return (
      <div className="login-container">
        <div className="login-cover">
          <h1>W</h1>
        </div>
       {errorMsg}
        <form className="login-form" method="POST">
          <label htmlFor="username">Username: </label>
          <input type="username" id="username" name="username" 
          value={this.state.username} 
          onChange={this.handleInputChange} 
          />
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" name="password" 
          value={this.state.password} 
          onChange={this.handleInputChange} 
          />
          <div className="button-arrangement">
            <button type="button" className="login-button" onClick={this.handleLogIn}>LOG IN</button>
            <button type="button" className="signup-button" onClick={handlePageChange}>SIGN UP</button>
          </div>
        </form>
      </div>
    );
  }
}


export default LogIn;

