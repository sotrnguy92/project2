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

    signUpApi: async (req, res) => {
        const {username, password} = req.body;
        console.log(req.body);
        try {
            const user = await insertUserToDb(username, password);
            res.json(user);
        }catch (e) {
            console.log(e);
            res.status(400)
                .json(e);
        }
    }

};
