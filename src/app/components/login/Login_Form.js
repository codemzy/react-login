import React from 'react';
import { Link } from 'react-router-dom'
import { appPath } from '../../config/settings';

// validate
import { checkEmail, checkPassword } from '../../utils/validate';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
      errors: {}
    };
  }

  _handleChange(event) {
    const name = event.target.name;
    this.setState({[name]: event.target.value});
  }

  _handleSubmit(event) {
    event.preventDefault();
    // validate data
    const ERRORS = { ...this.state.errors,
                    email: checkEmail(this.state.email),
                    password: checkPassword(this.state.password)
                   };
    this.setState({
        errors: ERRORS
    });
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit.bind(this)}>
        <h6 className="text-muted">Welcome back! Please enter your email address and password.</h6>
        <div className="form-group mt-4">
          <label>Email</label>
          <input type="email" name="email" className={"form-control" + (this.state.errors.email ? " is-invalid" : "")} placeholder="you@youremail.com" value={this.state.email} onChange={this._handleChange.bind(this)} />
          { this.state.errors.email ? <small className="invalid-feedback">{this.state.errors.email}</small> : false }
        </div>
        <div className="form-group mb-4">
          <label>Password</label>
          <input type="password" name="password" className={"form-control" + (this.state.errors.password ? " is-invalid" : "")} value={this.state.password} onChange={this._handleChange.bind(this)} />
          { this.state.errors.password ? <small className="invalid-feedback">{this.state.errors.password}</small> : false } 
          <small id="emailHelp" className="form-text text-muted"><Link to={appPath + "/login/forgotten"}>Forgot your password?</Link></small>
        </div>
        <button type="submit" className="btn btn-primary btn-block">Log In</button>
      </form>
    );
  }
}

export default LoginForm;