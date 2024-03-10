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
    if (missingFields.length > 0) {
      throw new InvalidFieldError(`Debe completar los siguientes campos: ${missingFields.join(', ')}`);
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
          throw new InvalidFieldError(`El campo "${field.name}" debe ser de tipo ${field.type}.`);
        }
        correctObject[field.name] = fields[field.name];
      }
    }
    if (missingFields.length > 0) {
      throw new InvalidFieldError(`Debe completar los siguientes campos: ${missingFields.join(', ')}`);
    }
    return correctObject;
  };
} // need Object

export default CheckError;