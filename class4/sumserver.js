const express = require( 'express');
const cors = require('cors');
const app = express();

app.use(cors());// to bypass chrome security 

app.get('/sum', (req,res)=> {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a + b ;
    res.send(sum.toString());
})

app.get('/interest',(req,res) => {
    const { principal, rate, time } = req.query;

    const principalParsed = Number(principal);
    const rateParsed = Number(rate);
    const timeParsed = Number(time);

    const interest = principalParsed * (rateParsed/100) * timeParsed;
    const total = interest + principalParsed;
    res.json({
        interest: interest.toString(),
        total: total.toString()
    });

})
app.listen(3000);