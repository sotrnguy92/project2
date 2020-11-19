const bcrypt =  require('bcryptjs');
const {
    insertUserQuery,
    findAllUsers,
    deleteUserQuery,
    findUserByIdQuery,
    findUserByUsernameQuery,
} = require('./userQueries');

const connection = require('../config/connection');

const fetchUsers = async () => {
    try {
        const [rows] = await connection.query(findAllUsers);
        console.log(rows);
        return rows;
    }catch (e) {
        throw new Error(e);
    }
};

const fetchUserById = async (id)  => {
    try {
        const [result] = await connection.query(findUserByIdQuery, id);
        // console.log(result[0]);
        return result[0];
    }catch (e) {
        throw new Error(e);
    }
};

const insertUserToDb = async (username, password) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    try {

        const [result] = await connection.query(insertUserQuery, [username, hashedPassword]);
        const [insertedUser] = await connection.query(findUserByIdQuery, result.insertId);
        console.log(insertedUser[0]);
        return insertedUser[0];
    }catch (e) {
        throw new Error(e);
    }
};

const deleteUserById = async (userId) => {
    try {
        const [deletedUser] = await connection.query(findUserByIdQuery, userId);
        console.log(deletedUser[0]);
        await connection.query(deleteUserQuery, userId);
        return deletedUser[0];
    }catch (e) {
        throw new Error(e);
    }
}

const findUserByUsername = async (username) => {
    try {
        const [user] = await connection.query(findUserByUsernameQuery, username);
        console.log(user[0]);
        return user[0];

    }catch (e) {
        throw new Error(e);
    }
}

// insertUserToDb ('jax', 'password');

// fetchUserById(1);


// deleteUserById(10);

// fetchUsers();

// findUserByUsername('Sasuke');

module.exports = {
    fetchUsers,
    fetchUserById,
    insertUserToDb,
    deleteUserById,
    findUserByUsername,
}
