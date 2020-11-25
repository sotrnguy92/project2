const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const {matchedPassword, findUserByUsername, fetchUserById} = require('../model/userOrm');

const localStrategy = new LocalStrategy(async (username, password, done)=> {
    let user;
    try{
        user = await findUserByUsername(username);
    }catch (e) {
        return done(e, null)
    }

    if (user) {
        const passwordsMatch = await matchedPassword(password, user.password);
        if (passwordsMatch) {

            return done(null, user);
        }
        return done(null, false);
    } else {
        return done(null, false);
    }
});
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: process.env.JWT_SECRET,
};

const jwtStrategy = new JwtStrategy(jwtOptions, async (jwtToken, done) =>{

    let user;

    try {
        user = await fetchUserById(jwtToken.sub);
    }catch (e) {
        return done(e, false);
    }

    if (!user) {
        return done(null, false);
    } else {
        return done(null, user)
    }
})

passport.use(localStrategy);
passport.use(jwtStrategy);
