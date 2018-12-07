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
          테스트입니다.이번엔 두번쨰 수정
      </div>
    );
  }
}

export default Customers;
