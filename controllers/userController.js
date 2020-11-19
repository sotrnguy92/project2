const {
    fetchUsers,
    fetchUserById,
    deleteUserById,
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


    getUserByIdApi: async (req, res) => {
        // console.log(req.params.userid);
        try{
            const user = await fetchUserById(req.params.userid);
            console.log('in the controller getuserapi', user);
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
            console.log(deletedUser)
            res.json(deletedUser);
        }catch (e) {
            console.log(e);
            res.status(400)
                .json(e);
        }
    },




};
