const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports.register = (req, res, next) => {
    console.log("Hello i am inside in registration");
    var user = new User();
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save((err,doc) => {
        if(!err)
          res.send(doc);
        else
            throw err;
    });
}

module.exports.userslist = (req,res,next) =>{
    User.find((err,doc) =>{
        if(!err)
            res.send(doc)
        else
            throw err;
    })
}
module.exports.home = (req, res, next) =>{
    res.send('I am new to express');
}