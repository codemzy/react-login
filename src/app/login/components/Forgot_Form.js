import React from 'react';

class ForgotForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
  }

  _handleChange(event) {
    const name = event.target.name;
    this.setState({[name]: event.target.value});
  }

  _handleSubmit(event) {
    alert('A name was submitted: ' + this.state.email);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit.bind(this)}>
        <h6 className="text-muted">Please submit your email address. You'll get sent a link to reset your password.</h6>
        <div className="form-group my-4">
          <label>Email</label>
          <input type="email" name="email" className="form-control" placeholder="you@youremail.com" value={this.state.email} onChange={this._handleChange.bind(this)} />
        </div>
        <button type="submit" className="btn btn-primary btn-block">Get Reset Email</button>
      </form>
    );
  }
}

export default ForgotForm;