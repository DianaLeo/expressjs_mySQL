const { Router } = require('express');
const database = require('../database');
const bodyParser = require('body-parser');
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
//http://localhost:5173?customerID=9&customerName=OluPhotography&contactName=DianaLiu&address=39ChesterRd&city=Brisbane&postcode=4113&country=AU
//http://localhost/api/postCustomer
var urlEncodedParser = bodyParser.urlencoded({extended:false});
router.post('/postCustomer', (req, res) => {
    try {
        console.log('Backend enter new customer post method');
        //Don't know which to use body or query?
        console.log(req.body);
        const customerID = req.body.customerID;
        const customerName = req.body.customerName;
        const contactName = req.body.contactName;
        const address = req.body.address;
        const city = req.body.city;
        const postcode = req.body.postcode;
        const country = req.body.country;
        //const newCustomer = req.query;

        //This is very important. Even if POSTMAN's body has already include ' ', still need to add ' ' around ${}
        //var sql = `INSERT INTO customers (CustomerID, CustomerName, ContactName, Address, City, Postcode, Country) VALUES (${newCustomer.CustomerID},'${newCustomer.CustomerName}','${newCustomer.ContactName}', '${newCustomer.Address}', '${newCustomer.City}', '${newCustomer.Postcode}', '${newCustomer.Country}')`;
        var sql = `INSERT INTO customers (CustomerID, CustomerName, ContactName, Address, City, Postcode, Country) VALUES (${customerID},'${customerName}','${contactName}', '${address}', '${city}', '${postcode}', '${country}')`;

        database.query(sql, (err, result) => {
            if (err) {
                throw err;
            } else {
                console.log('New customre saved to database');
                // res.status(200).json({
                //     msg: 'Customer post succeed',
                //     data: customerID
                // });
                res.end('New customer added!')
            }
        });
    } catch (error) {
        res.status(500).send('Server error');
    }
});


module.exports = router;