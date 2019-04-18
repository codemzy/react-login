import React from 'react';

// validate
import { checkEmail, checkPassword, checkMatch, checkNoMatch } from '../../utils/validate';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirm: '',
      errors: {}
    };
  }

  _handleChange(event) {
    const name = event.target.name;
    this.setState({[name]: event.target.value});
  }

  _handleValidate(event) {
    event.preventDefault();
    if (!this.props.loading) { // only if not already waiting for a response
      // validate data
      const ERRORS = { ...this.state.errors,
                      email: this.props.email ? checkEmail(this.state.email) : false,
                      password: this.props.password ? checkPassword(this.state.password) || checkNoMatch(this.state.password, this.state.email, "Your password can't be your email address") : false,
                      confirm: this.props.confirm ? checkMatch(this.state.confirm, this.state.password, "Your password confirmation does not match") : false
                     };
      this.setState({
          errors: ERRORS
      });
      // if no errors then handle the form
      if (!ERRORS.email && !ERRORS.password && !ERRORS.confirm) {
        this.props.handleSubmit({ email: this.state.email, password: this.state.password });
      }
    }
  }

  render() {
    return (
      <form onSubmit={this._handleValidate.bind(this)} className="mt-4">
        { this.props.email ?
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" className={"form-control" + (this.state.errors.email ? " is-invalid" : "")} placeholder="you@youremail.com" value={this.state.email} onChange={this._handleChange.bind(this)} />
            { this.state.errors.email ? <small className="invalid-feedback">{this.state.errors.email}</small> : false }
          </div>
          : false }
        { this.props.password ?
          <div className="form-group">
            <label>{this.props.password.title || "Password"}</label>
            <input type="password" name="password" className={"form-control" + (this.state.errors.password ? " is-invalid" : "")} value={this.state.password} onChange={this._handleChange.bind(this)} />
            { this.state.errors.password ? <small className="invalid-feedback">{this.state.errors.password}</small> : false }
            { this.props.password.help ? <small className="form-text text-muted">{this.props.password.help}</small> : false }
          </div>
          : false }
        { this.props.confirm ?
          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" name="confirm" className={"form-control" + (this.state.errors.confirm ? " is-invalid" : "")} value={this.state.confirm} onChange={this._handleChange.bind(this)} />
            { this.state.errors.confirm ? <small className="invalid-feedback">{this.state.errors.confirm}</small> : false }
          </div>
          : false }
        <div className="pt-3">
          { this.props.loading ? <button type="button" className="btn btn-primary btn-block" disabled><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> {this.props.button.submitted}</button> :
          <button type="submit" className="btn btn-primary btn-block">{this.props.button.submit}</button> }
        </div>
      </form>
    );
  }
}

export default Form;