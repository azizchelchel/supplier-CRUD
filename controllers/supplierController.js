import {insertSupplier, deleteFromDbSupplier, updateInDbSupplier, findSupplier} from '../models/supplierModel.js'

import { validationResult } from "express-validator";


// create a new supplier

const createSupplier=(req,res,next)=>{

if (validationResult(req).isEmpty()){
const dataInput=req.body;

console.log(dataInput)

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
    console.log('user errors occured'+  validationResult(req).array()[0]);
    res.status(400).send({
        "usererror":validationResult(req).array()[0]
    })
}

}


// delete a supplier

const deleteSupplier=(req,res,next)=>{

    if (validationResult(req).isEmpty()){
    const dataInput=req.body;
    
    console.log(dataInput)
    
    deleteFromDbSupplier(dataInput)
    .then(
        (supplier) => {
            res.status(200).send({"message":"supplier successfully deleted",
        "supplier":supplier},
            )
        }
    )
    .catch((error) => {
        console.log('error' + error);
        res.status(500).send('internal error cant delete '+ error)
    })
    }
    else{
        console.log('user errors occured'+  validationResult(req).array()[0]);
        res.status(400).send({
            "usererror":validationResult(req).array()[0]
        })
    }
    
    }


    // update a supplier

    const updateSupplier=(req,res,next)=>{

        if (validationResult(req).isEmpty()){
        const dataInput=req.body;
        
        console.log(dataInput)
        
        updateInDbSupplier(dataInput)
        .then(
            (supplier) => {
                res.status(200).send({"message":"supplier successfully updated",
            "supplier":supplier},
                )
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

// read a supplier
        const readSupplier=(req,res,next)=>{

            if (validationResult(req).isEmpty()){
            const dataInput=req.body;
            
            console.log(dataInput)
            
            findSupplier(dataInput)
            .then(
                (supplier) => {
                    res.status(200).send({"message":"supplier successfully found",
                "supplier":supplier},
                    )
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

export {createSupplier,deleteSupplier, updateSupplier, readSupplier};