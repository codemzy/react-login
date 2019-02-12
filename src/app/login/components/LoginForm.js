import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    this.setState({[name]: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h6 className="text-muted">Welcome back! Let's get signed in to your account.</h6>
        <div className="form-group mt-4">
          <label>Email</label>
          <input type="email" name="email" className="form-control" placeholder="you@youremail.com" value={this.state.email} onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" className="form-control" value={this.state.password} onChange={this.handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Log In</button>
      </form>
    );
  }
}

export default LoginForm;