import bcrypt from 'bcrypt';
const passwoed = 'mynameisjohn2023';
async function passwordHashing() {
    const salt = await bcrypt.genSalt(10);
    console.log("Salt is", salt);
    const hash = await bcrypt.hash(passwoed, salt);
    console.log("Hashed password is", hash);
    const allowed = await bcrypt.compare(passwoed, hash);
    console.log("Password matched", allowed);
}
passwordHashing();