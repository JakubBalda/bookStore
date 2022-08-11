const User = require('../models/user');

module.exports = {
    postRegister(req, res, next){
            User.register(new User({username: req.body.username}), req.body.password, (err) => {
                if (err){
                    console.log('error while registering!', err);
                    return next(err);
                }

                console.log('registered successfully!');

                res.redirect('/');
            });
        }
    }
