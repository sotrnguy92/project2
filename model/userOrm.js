const {
    insertUserQuery,
    findAllUsers,
    deleteUserQuery,
    findUserByIdQuery,
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
        console.log(result[0]);
        return result[0];
    }catch (e) {
        throw new Error(e);
    }
}

const insertUserToDb = async (username, password) => {
    try {
        const [result] = await connection.query(insertUserQuery, [username, password]);
        const [insertedUser] = await connection.query(findUserByIdQuery, result.insertId);
        console.log(insertedUser[0]);
        return insertedUser[0];
    }catch (e) {
        throw new Error(e);
    }
}

// insertUserToDb ('jax', 'password');

// fetchUserById(1);

fetchUsers();

module.exports = {
    fetchUsers,
    fetchUserById,
    insertUserToDb,
}
