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
            });
        });
    } catch (error) {
        res.status(500).send('Server error');
    }

});

//post a new customer
//http://localhost/api/postCustomer
router.post('/postCustomer', (req, res) => {
    try {
        console.log('Backend enter new customer post method');
        //Don't know which to use body or query?
        //POST=>body, GET=>query
        console.log(req.body);
        const customerID = req.body.customerID;
        const customerName = req.body.customerName;
        const contactName = req.body.contactName;
        const address = req.body.address;
        const city = req.body.city;
        const postcode = req.body.postcode;
        const country = req.body.country;

        var sql = `INSERT INTO customers (CustomerID, CustomerName, ContactName, Address, City, Postcode, Country) VALUES (${customerID},'${customerName}','${contactName}','${address}','${city}','${postcode}','${country}')`;

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

//delete a customer
//http://localhost:5173?customerID=15
//http://localhost/api/deleteCustomer/13
router.delete('/deleteCustomer/:id',(req,res)=>{
    try {
        console.log('Backend enter customer delete method!');
        var sql=`DELETE FROM customers WHERE CustomerID=${req.params.id}`;
        database.query(sql,(err,result)=>{
            if (err) {
                throw err;
            }else{
                res.end('Deleted');
            }
        });
    } catch (err) {
        res.status(500).send('Server error');
    }
})


module.exports = router;