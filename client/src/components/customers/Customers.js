import React, { Component } from 'react';
import './Customers.css';

class Customers extends Component {

  constructor(){
    super();
    this.state = {
      customers:[]
    }
  }
  //
  componentDidMount(){
    fetch('api/customers')
      .then(res => res.json())
      .then(customers => this.setState({customers}), ()=> console.log('customers fetched...'));
  }

  render() {
    return (
      <div >
        <h2>Customers</h2>
        <ul>
          { this.state.customers.map(customer => 
            <li key={customer.id}> {customer.firstName} {customer.lastName}</li>
          )}
        </ul>
          테스트입니다.ㅣ
      </div>
    );
  }
}

export default Customers;
