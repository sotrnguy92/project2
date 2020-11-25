const bcrypt =  require('bcryptjs');
const {
    insertUserQuery,
    findAllUsers,
    deleteUserQuery,
    findUserByIdQuery,
    findUserByUsernameQuery,
} = require('./userQueries');

const connection = require('../config/connection');

const matchedPassword = async (inputPassword, savedPassword) => {
    return await bcrypt.compare(inputPassword, savedPassword);
}

const fetchUsers = async () => {
    try {
        const [rows] = await connection.query(findAllUsers);
        return rows;
    }catch (e) {
        throw new Error(e);
    }
};

const fetchUserById = async (id)  => {
    try {
        const [result] = await connection.query(findUserByIdQuery, id);
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
        return insertedUser[0];
    }catch (e) {
        throw new Error(e);
    }
};

const deleteUserById = async (userId) => {
    try {
        const [deletedUser] = await connection.query(findUserByIdQuery, userId);
        await connection.query(deleteUserQuery, userId);
        return deletedUser[0];
    }catch (e) {
        throw new Error(e);
    }
}

const findUserByUsername = async (username) => {
    try {
        const [user] = await connection.query(findUserByUsernameQuery, username);
        return user[0];

    }catch (e) {
        throw new Error(e);
    }
}


module.exports = {
    fetchUsers,
    fetchUserById,
    insertUserToDb,
    deleteUserById,
    findUserByUsername,
    matchedPassword,
}
