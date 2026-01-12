# Day 12: API-Level Validation in Express.js

## What I Studied

Today, I learned how to implement API-level validation in a Node.js backend using Express.js and the `validator` module. API-level validation ensures that incoming data is correct, secure, and meets all requirements before it is processed or stored in the database.

## Key Concepts

### 1. API-Level Validation

- **Purpose:** Prevents invalid or malicious data from entering your system.
- **How:** Checks for required fields, correct formats (like email), and strong passwords before creating or updating users.

### 2. The `validator` Module

- **What is it?**  
  A popular npm package for validating and sanitizing strings.
- **Common Methods Used:**
  - `validator.isEmail(value)`: Checks if a string is a valid email address.
  - `validator.isStrongPassword(value)`: Checks if a password meets strength requirements (length, uppercase, lowercase, numbers, symbols).

### 3. Password Hashing with `bcrypt`

- **Why?**  
  Storing plain-text passwords is insecure. Hashing passwords before saving them protects user data.
- **How?**  
  - Generate a salt using `bcrypt.genSalt()`.
  - Hash the password using `bcrypt.hash()`.

## Implementation Details

### Validation Logic (`utils/validateUser.js`)

- Checks for mandatory fields: `firstName`, `emailId`, `password`.
- Validates email format.
- Validates password strength.
- Hashes the password before saving.

### Example: Registration API

```js
app.post('/register', async (req, res) => {
    try {
        const isValid = await validateUser(req.body);
        if (isValid) {
            const user = await User.create(req.body);
            res.status(201).json({ message: "User created successfully", user });
        } else {
            throw new Error("Missing mandatory fields");
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});
```

### Example: Login API

```js
app.post('/login', async (req, res) => {
    try {
        const { _id, password } = req.body;
        const user = await User.findById(_id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        res.status(200).json({ message: "Login successful", user });
    }
    catch (err) {
        res.status(500).json({ message: "Internal server error" });
    }   
});
```

## Testing

I tested the registration and login APIs using Postman:
- **Registration:** Sent valid and invalid data to check validation and error messages.
- **Login:** Checked basic login functionality with correct and incorrect credentials.

## Summary

- API-level validation is essential for security and data integrity.
- The `validator` module makes validation easy and reliable.
- Passwords should always be hashed before storing.
- I successfully implemented and tested these features in my Day12 project.
