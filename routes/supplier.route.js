import express from 'express';

import {createSupplier,
        deleteSupplier,
        updateSupplier,
        getSupplierById,
        getAllSuppliers} from '../controllers/supplierController.js';


const router= express.Router();

router.post('/createSupplier',createSupplier);

router.get('/getAllSuppliers',getAllSuppliers);

router.get('/getSupplierById',getSupplierById);

router.delete('/deleteSupplierbyId',deleteSupplier);

router.put('/updateSupplier',updateSupplier);



export default router;

