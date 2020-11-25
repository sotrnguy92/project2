const {
    fetchUsers,
    fetchUserById,
    deleteUserById,
} = require('../model/userOrm');

module.exports = {
    getAllUsersApi: async (req, res) => {
        try{
            const allUsers = await fetchUsers();
            res.json(allUsers);
        }catch (e) {
            console.log(e);
            res.status(400)
                .json(e);
        }
    },


    getUserByIdApi: async (req, res) => {
        try{
            const user = await fetchUserById(req.params.userid);
            res.json(user);
        }catch (e) {
            console.log(e);
            res.status(400)
                .json(e);
        }
    },

    deleteUserByIdApi: async (req, res) => {
        try {
            const deletedUser = await deleteUserById(req.params.userid);
            res.json(deletedUser);
        }catch (e) {
            console.log(e);
            res.status(400)
                .json(e);
        }
    },




};
