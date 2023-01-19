import {createSupplierValidation,
        deletSupplierValidation, 
        updateSupplierValidation} from './dataValidation/supplierValidation.js'



import {insertSupplier, 
        deleteFromDbSupplier, 
        updateInDbSupplier,
        findAllSuppliers, 
        findSupplier} from '../models/supplierModel.js'



// create a new supplier

const createSupplier=(req,res,next)=>{

    const {error}= createSupplierValidation(req.body);

    if (!error){
        const dataInput=req.body;

        insertSupplier(dataInput)
        .then(
            (supplier) => {
                res.status(200).send(
                    {"message":"supplier successfully inserted",
                    "supplier":supplier
                    },
                )
            }
        )
        .catch((error) => {
            console.log('error' + error);
            res.status(500).send('cant insert in db '+ error)
        })
    }
    else{
        console.log('user errors occured'+  error.details[0].message);
        res.status(400).send({
            "usererror":error.details[0].message
        })
    }

}


// delete a supplier

const deleteSupplier=(req,res,next)=>{
    const {error}= deletSupplierValidation(req.body);

    const id=req.body.id;
    
    if (!error){
        deleteFromDbSupplier(id)
        .then(
            (deletedSupplier) => {
                res.status(200).send({"message":"supplier successfully deleted",
                "supplier":deletedSupplier},
                )
                }
        )
        .catch((error) => {
                console.log('error' + error);
                res.status(500).send('internal error cant delete '+ error)
        })
    }
    else{
        console.log('user errors occured'+  error.details[0].message);
        res.status(400).send({
            "usererror":error.details[0]
        })
    }
    }


    // update a supplier

const updateSupplier=(req,res,next)=>{
    const {error}=updateSupplierValidation(req.body);
    if (!error){
        const dataInput=req.body;                 
        updateInDbSupplier(dataInput)
        .then(
            (supplier) => {
                res.status(200).send({
                    "message":"supplier successfully updated",
                    "supplier":supplier
                })
            }
        )
        .catch((error) => {
            console.log('error' + error);
            res.status(500).send('internal error cant update '+ error)
        })
    }
    else{
        console.log('user errors occured'+  validationResult(req).array()[0]);
        res.status(400).send({
            "usererror":validationResult(req).array()[0]
        })
    }       
}

// read all the suppliers

const getAllSuppliers=(req,res,next)=>{
    const dataInput=req.body;
                
    findAllSuppliers(dataInput)
    .then(
        (supplier) => {
            res.status(200).send({
                "message":"supplier successfully found",
                "supplier":supplier
            },
            )
        }
    )
    .catch((error) => {
        console.log('error' + error);
        res.status(500).send('internal error cant update '+ error)
    })            
}


// read a supplier by ID

const getSupplierById=(req,res,next)=>{
    const {error}=updateSupplierValidation(req.body);
    if (!error){
        findSupplier(req.body.id)
        .then(
            (supplier) => {
                res.status(200).send({
                    "message":"supplier successfully found",
                    "supplier":supplier
            })   
            }
        )
        .catch((error) => {
            console.log('error' + error);
            res.status(500).send('internal error cant update '+ error)
        })  
    }
}            

export {createSupplier,
        deleteSupplier, 
        updateSupplier, 
        getAllSuppliers , 
        getSupplierById
    };