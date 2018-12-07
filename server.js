const express = require('express');

const app = express();

const port = 5000;

app.get('/api/customers', (req,res) =>{
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'John2', lastName: 'Doe2'},
    {id: 3, firstName: 'John3', lastName: 'Doe3'},
  ];

  res.json(customers);
});
app.listen (port , () => console.log('server started on port '+port));
