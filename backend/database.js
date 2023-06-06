const mysql = require('mysql2');

const con = mysql.createConnection({
    host:'localhost',
    database:'test_db',
    user:'root',
    password:'1101928jj'
});

con.connect((err)=>{
    if (err){
        throw err;
    }else{
        console.log('Database connected!');
    }
});

module.exports = con;