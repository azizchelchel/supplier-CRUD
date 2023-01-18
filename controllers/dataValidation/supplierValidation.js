
import Joi from 'joi';

// /^[0-9]+$/
// ^(\+|00)[1-9][0-9 \-\(\)\.]{7,32}$

const createSupplierValidation= data=>{

  const schema = Joi.object({
    name: Joi.string().alphanum().min(1).max(191).message('the name must be at least one character'),
    contact: Joi.string().min(1).max(191).message('write a correct contact'),
    email: Joi.string().email().max(191).message('insert a correct email'),
    countryCode:Joi.string().pattern(/[+][0-9]{3}$/).message('country code is incorrect'),
    phoneNumber: Joi.string().pattern(/[0-9]{9}$/).message('phone number is incorrect'),
    address: Joi.string().min(1).max(191).message('write a correct address')
    
  }).unknown();

  return schema.validate(data);

}


// ^[(][\+][0-9]{3}[)][0-9]{9}$

const updateSupplierValidation= data=>{

  const schema = Joi.object({
    name: Joi.string().alphanum().min(1).max(191).message('the name must be at least one character'),
    contact: Joi.string().min(1).max(191).message('write a correct contact'),
    email: Joi.string().email().max(191).message('insert a correct email'),
    countryCode:Joi.string().pattern(/[+][0-9]{3}$/).message('country code is incorrect'),
    phoneNumber: Joi.string().pattern(/[1-9][0-9]{8}$/).message('phone number is incorrect'),
    address: Joi.string().min(1).max(191).message('write a correct address')
  }).unknown();

  return schema.validate(data);

}



const getOneSupplierValidation= data=>{

  const schema = Joi.object({
    id: Joi.number().min(1).message('incorrect id'),
  }).unknown();

  return schema.validate(data);

}



const deletSupplierValidation= data=>{

  const schema = Joi.object({
    id: Joi.number().min(1).message('the id must be a positive integer 1,5,18...'),
  }).unknown();

  return schema.validate(data);

}
  export {createSupplierValidation,
          deletSupplierValidation, 
          getOneSupplierValidation, 
          updateSupplierValidation};