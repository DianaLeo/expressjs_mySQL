const { Router } = require('express');
const database = require('../database');

const router = Router();

//get customer list
//http://localhost/api/customers
router.get('/customers', (req, res) => {
    console.log('Backend enter customers list get method!');
    try {
        var sql = 'SELECT * FROM customers';
        database.query(sql, (err, result) => {
            res.status(200).json({
                msg: 'Customer list get succeed',
                data: result
            })
        });
    } catch (error) {
        res.status(500).send('Server error');
    }

});

//post a new customer
//http://localhost:5173?customerName=OluPhotography&contactName=DianaLiu&address=39ChesterRd&city=Brisbane&postcode=4113&country=AU
//http://localhost/api/customer
router.post('/customer', (req, res) => {
    try {
        console.log('Backend enter new customer post method');
        const newCustomer = req.body;

        //This is very important. Even if POSTMAN's body has already include ' ', still need to add ' ' around ${}
        var sql = `INSERT INTO customers (CustomerID, CustomerName, ContactName, Address, City, Postcode, Country) VALUES (${newCustomer.CustomerID},'${newCustomer.CustomerName}','${newCustomer.ContactName}', '${newCustomer.Address}', '${newCustomer.City}', '${newCustomer.Postcode}', '${newCustomer.Country}')`;

        database.query(sql, (err, result) => {
            if (err) {
                throw err;
            } else {
                res.status(200).json({
                    msg: 'Customer list post succeed',
                    data: newCustomer.CustomerID
                });
            }
        });
    } catch (error) {
        res.status(500).send('Server error');
    }
});


module.exports = router;