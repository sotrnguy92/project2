const {
    fetchUsers,
    fetchUserById,
    insertUserToDb,
} = require('../model/userOrm');

module.exports = {
    getAllUsersApi: async (req, res) => {
        console.log('here i am');
        try{
            const allUsers = await fetchUsers();
            res.json(allUsers);
        }catch (e) {
            console.log(e);
            res.status(400)
                .json(e);
        }
    },

};
