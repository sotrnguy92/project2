const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const {matchedPassword, findUserByUsername} = require('../model/userOrm');

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
            console.log(passwordsMatch);
            return done(null, user);
        }
        console.log('found user but passwords dont match');
        return done(null, false);
    } else {
        console.log('did not find user');
        return done(null, false);
    }
});

passport.use(localStrategy);
