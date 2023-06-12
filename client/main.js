import axios from 'axios';
import { getCustomers } from './src/js/utils';


const url = 'http://localhost/api/customers';
axios.get(url).then(getCustomers); 



