import React from 'react';

// context for user state
import { UserContext } from '../../config/context';

// api calls
import { userRegister } from '../../api/user';

// validate
import { checkEmail, checkPassword, checkMatch, checkNoMatch } from '../../utils/validate';

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
    if (!this.state.loading) { // only if not already waiting for a response
      // validate data
      const ERRORS = { ...this.state.errors,
                      email: checkEmail(this.state.email),
                      password: checkPassword(this.state.password) || checkNoMatch(this.state.password, this.state.email, "Your password can't be your email address"),
                      confirm: checkMatch(this.state.confirm, this.state.password, "Your password confirmation does not match")
                     };
      this.setState({
          errors: ERRORS
      });
      // if no errors then handle the form
      if (!ERRORS.email && !ERRORS.password && !ERRORS.confirm) { // and no errors
        this.setState({loading: true});
        userRegister(this.state.email, this.state.password).then((result) => {
          this.context.updateUser(result);
        }).catch(() => {
          this.setState({loading: false});
        });
      }
    }
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
          <input type="password" name="password" className={"form-control" + (this.state.errors.password ? " is-invalid" : "")} value={this.state.password} onChange={this._handleChange.bind(this)} />
          { this.state.errors.password ? <small className="invalid-feedback">{this.state.errors.password}</small> : false }
        </div>
        <div className="form-group mb-4">
          <label>Confirm Password</label>
          <input type="password" name="confirm" className={"form-control" + (this.state.errors.confirm ? " is-invalid" : "")} value={this.state.confirm} onChange={this._handleChange.bind(this)} />
          { this.state.errors.confirm ? <small className="invalid-feedback">{this.state.errors.confirm}</small> : false }
        </div>
        { this.state.loading ? <button type="button" className="btn btn-primary btn-block" disabled><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Creating Account</button> :
        <button type="submit" className="btn btn-primary btn-block">Create Account</button> }
      </form>
    );
  }
}

RegisterForm.contextType = UserContext;

export default RegisterForm;