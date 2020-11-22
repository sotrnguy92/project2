const jwt = require ('jsonwebtoken');
const {
    insertUserToDb,
} = require('../model/userOrm')

const userToken = (id) => {
    return jwt.sign({
        sub: id,
        iat: new Date().getTime()
    }, process.env.JWT_SECRET);
};

module.exports = {
    signUpApi: async (req, res) => {
        console.log('this is the secret', process.env.JWT_SECRET)
        // console.log(req.body);
        const {username, password} = req.body;
        try {
            const user = await insertUserToDb(username, password);
            res.json(userToken(user.id));
        }catch (e) {
            console.log(e);
            res.status(400)
                .json(e);
        }
    },

    signInApi: (req, res) => {
        console.log('Bruh we logged in as:', req.user);
        res.json(userToken(req.user.id));
    }
}
