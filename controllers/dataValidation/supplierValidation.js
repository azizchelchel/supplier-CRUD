
import Joi from 'joi';



/** Supplier validation schema for Joi */

const supplierSchema = Joi.object({
    id: Joi.number().greater(0),
    name: Joi.string().alphanum().min(1).max(191),
    contact: Joi.string().alphanum().min(1).max(191),
    email: Joi.string().email().max(191),
    phone_num: Joi.string().length(10).pattern(/^[0-9]+$/),
    address: Joi.string().alphanum().min(1).max(191),
  });

  export {supplierSchema};