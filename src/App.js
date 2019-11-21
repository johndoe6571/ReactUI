import React, { Component } from 'react';
import ReactDom from "react-dom";
import './App.css';
import axios from 'axios';

class App extends Component {
  
  state = {
    accountData: []
  }

  componentDidMount() {
    axios.get('https://my-json-server.typicode.com/johndoe6571/ReactUI/accounts')
      .then(res => this.setState({ accountData: res.data }));
  }

  render() {
    return (
      console.log(this.state.accountData),
        <div className="App">
          <h1>Account Information</h1>
          <table>
            <tbody>
              <tr>
                <td>Account Name</td>
                {this.state.accountData.map((d) => <td key={d.accountName}>{d.accountName}</td>)}
              </tr>
              <tr>
                <td>Amount</td>
                {this.state.accountData.map((d) => <td key={d.amount}>{d.amount}</td>)}
              </tr>
            </tbody>
          </table>         
        </div>
    );
  }

}
export default App;
