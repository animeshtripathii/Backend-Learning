# 🗄️ Database Overview

## 📚 What is a Database?
A database is an organized collection of structured information, or data, typically stored electronically in a computer system. Databases are designed to manage, store, retrieve, and manipulate data efficiently. They are used in various applications, from websites and mobile apps to enterprise systems, to keep data accessible and consistent.

## 🗂️ Types of Databases
Databases can be broadly categorized into two main types:


### 1️⃣ Relational Databases (SQL)
- **Definition:** Store data in tables with rows and columns. Each table represents an entity, and relationships between tables are defined using keys.
- **Examples:** MySQL, PostgreSQL, Oracle, Microsoft SQL Server.
- **Features:**
  - Structured schema
  - Supports SQL queries
  - ACID compliance (Atomicity, Consistency, Isolation, Durability)
- **Cons:**
  - Less flexible for rapidly changing data structures
  - Scaling horizontally is complex
  - Can become expensive at large scale


### 2️⃣ Non-Relational Databases (NoSQL)
- **Definition:** Store data in formats other than tables, such as documents, key-value pairs, wide-columns, or graphs.
- **Examples:** MongoDB (document), Redis (key-value), Cassandra (wide-column), Neo4j (graph).
- **Features:**
  - Flexible schema
  - Designed for scalability
  - Can handle unstructured or semi-structured data
- **Cons:**
  - May lack strong consistency guarantees (eventual consistency)
  - Fewer complex query capabilities compared to SQL
  - Data integrity must often be managed at the application level

## 📈 Difference in Scaling
- **Relational Databases (SQL):**
  - Typically scale vertically (by increasing hardware resources like CPU, RAM on a single server).
  - Complex to scale horizontally (across multiple servers) due to strict schema and relationships.
  - Best for structured data and complex queries.
- **Non-Relational Databases (NoSQL):**
  - Designed for horizontal scaling (adding more servers to distribute the load).
  - Handle large volumes of data and high-velocity transactions efficiently.
  - Suitable for big data, real-time web apps, and applications with rapidly changing data structures.

## 🍃 What is MongoDB?

MongoDB is a popular open-source NoSQL database that stores data in flexible, JSON-like documents. It is designed for scalability, high performance, and ease of development.

**Cons of MongoDB:**
- No enforced schema at the database level (can lead to inconsistent data if not managed)
- Joins are not natively supported (handled at application level or with aggregation)
- Transactions support is available but not as mature as in SQL databases

### ✨ Key Features of MongoDB
- 📄 **Document-Oriented:** Data is stored in BSON (Binary JSON) documents, allowing for nested data structures.
- 📝 **Schema-less:** Collections do not enforce a fixed schema, making it easy to store different types of data.
- 📊 **Horizontal Scaling:** Supports sharding, which distributes data across multiple servers for better performance and reliability.
- 🔄 **High Availability:** Provides replication through replica sets, ensuring data redundancy and failover.
- 🔍 **Rich Query Language:** Supports powerful queries, indexing, and aggregation operations.

## 🏗️ MongoDB Internal Architecture
- 🗃️ **Database:** The highest level of organization, containing collections.
- 📁 **Collection:** A group of documents, similar to a table in SQL but without a fixed schema.
- 📄 **Document:** The basic unit of data, stored as BSON. Each document can have different fields and structures.
- 🧩 **Sharding:** Distributes data across multiple machines to support large datasets and high throughput.
- 🛡️ **Replication:** Uses replica sets to maintain multiple copies of data for redundancy and high availability.
- 💾 **Storage Engine:** Handles how data is stored on disk. The default is WiredTiger, which provides efficient storage and compression.


---

## 🦦 Mongoose and MongoDB Schemas


### 📝 What is a Schema?
- Defines the structure of documents within a collection in a database.
- In MongoDB (schema-less by default), a schema is not enforced at the database level.
- Documents in the same collection can have different fields and data types.


### ❓ Why Do We Need Mongoose?
Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a higher-level abstraction for interacting with MongoDB by allowing developers to define schemas, models, and validation rules in their applications.

**Cons of Mongoose:**
- Adds an abstraction layer, which may introduce some performance overhead
- Learning curve for advanced features
- Not always needed for very simple projects

- 🏷️ **Schema Definition:** Mongoose lets you define schemas for your collections, specifying field names, data types, default values, and validation rules. This brings structure and consistency to your data.
- ✅ **Data Validation:** Ensures that only valid data is saved to the database by enforcing rules at the application level.
- 🪝 **Middleware (Hooks):** Allows you to run custom logic before or after certain operations (e.g., saving, updating, deleting documents).
- 🛠️ **Model Methods:** You can define custom methods and statics on your models for reusable logic.
- 🔗 **Population:** Makes it easy to reference documents in other collections and automatically replace references with actual data (similar to joins in SQL).
- 🧮 **Query Helpers:** Provides a rich API for querying and manipulating data.

### ⚙️ How Mongoose Works
1. **Define a Schema:** Describe the structure and constraints of your documents.
2. **Create a Model:** Compile the schema into a model, which is a class with which you construct documents.
3. **Interact with MongoDB:** Use the model to create, read, update, and delete documents in the database.

#### 💡 Example Schema and Model in Mongoose
```js
const mongoose = require('mongoose');

// Define a schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, min: 0 }
});

// Create a model
const User = mongoose.model('User', userSchema);

// Now you can use User to interact with the users collection
```

### 📝 Summary
- **MongoDB** is flexible and schema-less, but this can lead to inconsistent data.
- **Mongoose** adds structure, validation, and powerful features to MongoDB, making it easier to build robust applications.

Mongoose is widely used in Node.js applications to ensure data integrity, simplify database operations, and provide a more organized way to work with MongoDB.
