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
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" className="form-control" placeholder="you@youremail.com" value={this.state.email} onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" className="form-control" value={this.state.password} onChange={this.handleChange} />
        </div>
      </form>
    );
  }
}

export default LoginForm;