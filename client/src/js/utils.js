import axios from 'axios';

import {
  customerTableBody,
  btn_edit
} from './common';

var recordsLength = 0;

const getCustomers = (response) => {
  console.log('Frontend axios GET method.');
  const customers = response.data.data;
  customers.forEach((element, index) => {
    recordsLength++;
    const tr = document.createElement('tr');
    const th = document.createElement('th');
    const customerName = document.createElement('td');
    const contactName = document.createElement('td');
    const address = document.createElement('td');
    const city = document.createElement('td');
    const postcode = document.createElement('td');
    const country = document.createElement('td');

    th.textContent = element.CustomerID;
    customerName.textContent = element.CustomerName;
    contactName.textContent = element.ContactName;
    address.textContent = element.Address;
    city.textContent = element.City;
    postcode.textContent = element.Postcode;
    country.textContent = element.Country;

    tr.append(th, customerName, contactName, address, city, postcode, country);
    customerTableBody.appendChild(tr);
  })
}


const deleteLastCustomer = () => {
  console.log('deleteLastCutomer()');
  const url = 'http://localhost/api/deleteCustomer/' + recordsLength;
  axios.delete(url);
  location.reload();
}

btn_edit.addEventListener('click', deleteLastCustomer);

export { getCustomers, deleteLastCustomer };