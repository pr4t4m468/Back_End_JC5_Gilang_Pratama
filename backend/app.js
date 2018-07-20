const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const koneksi = require('cors');
const database = require('mysql');
const db = database.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'usbw',
    database: 'predo',
    port: '3307'
})
db.connect();

var port = 5001;

app.use(koneksi());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req,res) => {
    
    var panggilData = 'SELECT * FROM produk';
    db.query(panggilData, (err,hasil) => {
        if (err) throw err;
        res.send(hasil);
    })
})

app.get('/ubahdata',)

app.listen(port, ()=>{
    console.log(`Server berjalan di port ${port}`);
})