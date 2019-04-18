import React from 'react';

// context
import { getContext } from '../../context';

// validate
import { isRequired, checkEmail, checkNoMatch } from '../../utils/validate';

// api calls
import { changeEmail } from '../../api/user';

class Email extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      verifying: false,
      email: this.props.userContext.user.email,
      password: '',
      errors: {}
    };
  }

  _handleChange(event) {
    const name = event.target.name;
    this.setState({[name]: event.target.value});
  }

  _handleReset() {
    this.setState({ email: this.props.userContext.user.email, password: "", errors: {} });
  }

  _handleSubmit(event) {
    event.preventDefault();
    if (!this.state.loading) { // only if not already waiting for a response
      // validate data
      const ERRORS = { ...this.state.errors,
                      password: isRequired(this.state.password, "You need to enter your current password") || checkNoMatch(this.state.password, this.props.userContext.user.email, "Your password can't be your email address") || checkNoMatch(this.state.password, this.state.email, "Your password can't be your email address"),
                      email: checkEmail(this.state.email) || checkNoMatch(this.state.email, this.props.userContext.user.email, "This is already your email address")
                     };
      this.setState({
          errors: ERRORS
      });
      // if no errors then handle the form
      if (!ERRORS.email && !ERRORS.password) {
        this.setState({ loading: true });
        changeEmail(this.state.password, this.state.email).then((result) => {
          this._handleReset();
          this.props.alertContext.updateAlert({ type: "success", message: "Your email address has been updated." });
        }).catch((error) => {
          this.props.alertContext.updateAlert({ type: "danger", message: error.message });
        }).finally(() => {
          this.setState({ loading: false });
        });
      }
    }
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit.bind(this)} className="mt-4 row">
        <div className="col-md-6">
          <h2>Email</h2>
          <div className="form-group">
            <label>Email Address</label>
            <small className="form-text mt-n2 mb-2">You can enter a new email address if you want to change it.</small>
            <input type="email" name="email" className={"form-control" + (this.state.errors.email ? " is-invalid" : "")} value={this.state.email} onChange={this._handleChange.bind(this)} />
            { this.state.errors.email ? <small className="invalid-feedback">{this.state.errors.email}</small> : false }
          </div>
          { this.state.email !== this.props.userContext.user.email ?
            <span>
              <div className="form-group">
                <label>Password</label>
                <small className="form-text mt-n2 mb-2">Please enter your password to authorise changes.</small>
                <input type="password" name="password" className={"form-control" + (this.state.errors.password ? " is-invalid" : "")} value={this.state.password} onChange={this._handleChange.bind(this)} />
                { this.state.errors.password ? <small className="invalid-feedback mb-n4">{this.state.errors.password}</small> : false }
              </div>
            </span>
              : false }
          </div>
        { this.state.email !== this.props.userContext.user.email ?
          <div className="col-md-6 align-self-end">
            <div className="form-group pt-3">
              { this.state.loading ? <button type="button" className="btn btn-dark" disabled><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Updating Email</button> :
              <span><button type="button" onClick={this._handleReset.bind(this)} className="btn btn-outline-danger">Cancel</button> <button type="submit" className="btn btn-dark">Update Email</button></span> }
            </div>
          </div>
          : false }
      </form>
    );
  }
}

export default getContext({
  user: true,
  alert: true
})(Email);