import React from 'react';

// validate
import { checkEmail } from '../../utils/validate';

class ForgotForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
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
    const ERRORS = { email: checkEmail(this.state.email) };
    this.setState({ errors: ERRORS });
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit.bind(this)}>
        <h6 className="text-muted">Please submit your email address. You'll get sent a link to reset your password.</h6>
        <div className="form-group my-4">
          <label>Email</label>
          <input type="email" name="email" className={"form-control" + (this.state.errors.email ? " is-invalid" : "")} placeholder="you@youremail.com" value={this.state.email} onChange={this._handleChange.bind(this)} />
          { this.state.errors.email ? <small className="invalid-feedback">{this.state.errors.email}</small> : false }
        </div>
        <button type="submit" className="btn btn-primary btn-block">Get Reset Email</button>
      </form>
    );
  }
}

export default ForgotForm;