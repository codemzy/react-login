import React from 'react';

// context for user state
import { UserContext } from '../../config/context';

class AccountDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: ''
    };
  }

  _handleChange(event) {
    const name = event.target.name;
    this.setState({[name]: event.target.value});
  }

  _handleSubmit(event) {
    event.preventDefault();
    // removed 'disabled' from fieldset below to build out form when wired up to backend
    // e.g. change name, change password features
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit.bind(this)} className="row pt-4">
        <div className="form-group col-md-6">
          <label>First Name</label>
          <input type="text" name="firstName" className="form-control" placeholder={this.context.firstName} value={this.state.firstName} onChange={this._handleChange.bind(this)} />
        </div>
        <div className="form-group col-md-6">
          <label>Last Name</label>
          <input type="text" name="lastName" className="form-control" placeholder={this.context.lastName} value={this.state.lastName} onChange={this._handleChange.bind(this)} />
        </div>
        <div className="form-group col-md-6">
          <label>Email</label>
          <input type="email" name="email" className="form-control" placeholder={this.context.email} value={this.state.email} onChange={this._handleChange.bind(this)} />
        </div>
      </form>
    );
  }
}

AccountDetails.contextType = UserContext;

export default AccountDetails;