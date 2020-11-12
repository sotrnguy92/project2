const insertUserQuery = 'INSERT INTO users (username, password) VALUES (?,?);';
const deleteUserQuery = 'DELETE FROM users WHERE id ?;';
const findAllUsers = 'SELECT id, username FROM users;';
