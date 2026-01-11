# Day 11: Password Hashing, Salt, and bcrypt

On Day 11, I learned about the importance of securely storing user passwords using hashing, salt, and the bcrypt library. Here are the key concepts covered:

## 1. Password Hashing
- Hashing is a one-way cryptographic function that converts a password into a fixed-length string of characters.
- Hashes are irreversible, meaning you cannot retrieve the original password from the hash.
- Common hashing algorithms include SHA-256, SHA-512, etc., but for passwords, specialized algorithms like bcrypt are preferred.

## 2. Salt
- A salt is a random value added to the password before hashing.
- It ensures that even if two users have the same password, their hashes will be different.
- Salting protects against rainbow table attacks (precomputed hash attacks).

## 3. bcrypt
- bcrypt is a password-hashing function designed for secure password storage.
- It automatically handles salt generation and includes a work factor (cost) to make brute-force attacks slower.
- bcrypt is widely used in Node.js applications for password security.

### Example Usage in Node.js
```js
const bcrypt = require('bcrypt');
const password = 'mySecretPassword';
const saltRounds = 10;

// Hashing a password
bcrypt.hash(password, saltRounds, function(err, hash) {
  // Store hash in your database
});

// Comparing a password
bcrypt.compare(password, hash, function(err, result) {
  // result == true if password matches
});
```

## Summary
- Always hash passwords before storing them.
- Use a salt to make hashes unique.
- Prefer bcrypt for password hashing in Node.js for better security.

This knowledge is essential for building secure authentication systems and protecting user data.
