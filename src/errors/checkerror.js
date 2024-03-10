import { InvalidFieldError } from "./customError.js";

class CheckError {
  static validateFields = (fields, requiredFields) => {
      const missingFields = [];
      const correctObject = {};
    
      for (const field of requiredFields) {
        if (!fields[field]) {
          missingFields.push(field);
        } else {
          correctObject[field] = fields[field];
        }
      }
  
      if (missingFields.length > 1) {
        throw new InvalidFieldError(`Please complete the following fields: ${missingFields.join(', ')}`);
      } else if (missingFields.length === 1) {
          throw new InvalidFieldError(`Please complete the field: ${missingFields[0]}`);
      }
      
      return correctObject;
  } // need Array

  static validateFieldsAndType = (fields, requiredFields) => {
      const missingFields = [];
      const correctObject = {};
    
      for (const field of requiredFields) {
        if (!fields[field.name]) {
          missingFields.push(field.name);
        } else {
          const requiredType = typeof fields[field.name];
          if (requiredType !== field.type) {
            throw new InvalidFieldError(`The field "${field.name}" must be of type ${field.type}.`);
          }
          correctObject[field.name] = fields[field.name];
        }
      }
      if (missingFields.length > 1) {
        throw new InvalidFieldError(`Please complete the following fields: ${missingFields.join(', ')}`);
      } else if (missingFields.length === 1) {
          throw new InvalidFieldError(`Please complete the field: ${missingFields[0]}`);
      }
      return correctObject;
  };
} // need Object

export default CheckError;