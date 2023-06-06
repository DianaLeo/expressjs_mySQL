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
                msg:'Customer list get succeed',
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
router.post('/customer',(req,res)=>{
    try {
        console.log('Bckend enter new customer post method');
        console.log(req.body);
        res.status(200).json({
            msg:'New customer post succeed!'
        })
    } catch (error) {
        res.status(500).send('Server error');
    }
});


module.exports = router;