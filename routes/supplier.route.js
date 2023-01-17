import express from 'express';

import {check} from 'express-validator';

import {createSupplier, deleteSupplier,updateSupplier, readSupplier} from '../controllers/supplierController.js';


const router= express.Router();

router.post('/createSupplier',
check("name").not().isEmpty().withMessage('name must be at least one character'),
check("contact").isLength({ min: 10 }).withMessage('contact must be at least one character'),
check("email").isEmail().withMessage('write a valid email').withMessage('write a valid email'),
check('phone_num').not().isEmpty().isInt(),check('address').not().isEmpty(),createSupplier);

router.get('/readSupplier',
check("name").not().isEmpty().withMessage('name must be at least one character'),
check("email").isEmail().withMessage('write a valid email').withMessage('write a valid email')
,readSupplier);

router.delete('/deleteSupplier',
check("name").not().isEmpty().withMessage('name must be at least one character'),
check("email").isEmail().withMessage('write a valid email'),
deleteSupplier);

router.put('/updateSupplier',
check("name").not().isEmpty().withMessage('name must be at least one character'),
check("contact").isLength({ min: 10 }).withMessage('contact must be at least one character'),
check("email").isEmail().withMessage('write a valid email').withMessage('write a valid email'),
check('phone_num').not().isEmpty().isInt(),check('address').not().isEmpty(),updateSupplier);



export default router;

