import React from 'react';

// validate
import { checkEmail } from '../../utils/validate';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirm: '',
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
                    email: checkEmail(this.state.email)
                   };
    this.setState({
        errors: ERRORS
    });
    return ERRORS;
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit.bind(this)}>
        <h6 className="text-muted">Sign up with your email address and password.</h6>
        <div className="form-group mt-4">
          <label>Email</label>
          <input type="email" name="email" className={"form-control" + (this.state.errors.email ? " is-invalid" : "")} placeholder="you@youremail.com" value={this.state.email} onChange={this._handleChange.bind(this)} />
          { this.state.errors.email ? <small className="invalid-feedback">{this.state.errors.email}</small> : false }
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" className="form-control" value={this.state.password} onChange={this._handleChange.bind(this)} />
        </div>
        <div className="form-group mb-4">
          <label>Confirm Password</label>
          <input type="password" name="confirm" className="form-control" value={this.state.confirm} onChange={this._handleChange.bind(this)} />
        </div>
        <button type="submit" className="btn btn-primary btn-block">Create Account</button>
      </form>
    );
  }
}

export default RegisterForm;