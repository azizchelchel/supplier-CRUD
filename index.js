import express from 'express';

import supplierRouer from './routes/supplier.route.js'

const PORT=3000;

const app=express();  

app.use(express.json());

app.use('/supplier',supplierRouer)

app.listen(PORT, (err) => { 
    if (err){
        console.log('error ' + err)
    }
    console.log(`server running on http://localhost:${PORT}`)
 })

                          