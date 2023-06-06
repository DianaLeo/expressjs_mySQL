import axios from 'axios';

import {app} from './src/js/common';

const customerListContainer = document.createElement('p');

app.textContent='app';


const url = 'http://localhost/api/customers';
axios.get(url).then((response)=>{
  console.log('get');
  app.append(customerListContainer);
  customerListContainer.textContent = response.data.data[0].CustomerID;
})