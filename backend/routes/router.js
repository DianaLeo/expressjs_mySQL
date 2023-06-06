const { Router } = require('express');
const database = require('../database');

const router = Router();

console.log('lala');
//get customer list
//http://localhost/api/customers
router.get('/customers', (req, res) => {
    console.log('Enter Customer list get method!');
    try {
        var sql = 'SELECT * FROM customers';
        database.query(sql, (err, result) => {
            res.status(200).json({
                msg:'Customer list get succeed',
                data: result
            })
        });
    } catch (error) {
        res.status(500).send('Server error');
    }

});

module.exports = router;