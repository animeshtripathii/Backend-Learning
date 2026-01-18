const bcrypt = require('bcrypt');
const validator = require('validator');

async function validateUser(reqBody) {
    const mandatoryFields = ["firstName", "emailId", "password"];
    const hasAllFields = mandatoryFields.every(field => reqBody.hasOwnProperty(field));
    if (!hasAllFields) return false;

    if (!validator.isEmail(reqBody.emailId)) throw new Error("Invalid email format");

    if (!validator.isStrongPassword(reqBody.password)){ 
    throw new Error("Password is not strong enough");
    }
    else{
    const salt = await bcrypt.genSalt(10);
    reqBody.password = await bcrypt.hash(reqBody.password, salt);
    return true;
}
}

module.exports = validateUser;
