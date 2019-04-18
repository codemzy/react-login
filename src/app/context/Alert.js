import React from 'react';

// alert context
const AlertContext = React.createContext({
  alert: false,
  updateAlert: () => {}
});

// alert context provider
export const AlertProvider = class AlertProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: false, // { type: "success", message: "This is the alert message" }
      updateAlert: (alert) => { this.setState({ alert: alert }) }
    };
  }
  render() {
     return (
       <AlertContext.Provider value={{ alert: this.state.alert, updateAlert: this.state.updateAlert }}>
         {this.props.children}
       </AlertContext.Provider>
     );
  }
};

// alert context consumer
export const AlertConsumer = AlertContext.Consumer;