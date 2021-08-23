let jwt = require('jsonwebtoken');
let bcrypt = require('bcryptjs');
let empModel = require('../models/user');
const fs = require('fs');
const { query } = require('express');

let userController = {};
/**
 * Signup Contoller
*/
userController.signupUser = async (req, res) => {

    if (!req.body.email || !req.body.password || !req.body.password.length == 5) {
        return res.status(400).send("required parameter are missing");
    }
    else {

        let userExist = await empModel.findOne({ email: req.body.email }, { password: 0 });
        if (userExist) {
            return res.status(400).send("Email is already exist");
        } else {
            // bcrypt Password
            let hashedPassword = bcrypt.hashSync(req.body.password, 8);
            req.body.password = hashedPassword;
            let users = new empModel();
            users.email = req.body.email,
            users.name = req.body.name ? (req.body.name).toLowerCase() : '';
            users.password = req.body.password;
            users.salary = req.body.salary?req.body.salary:0;
            users.save((err, data) => {
                if (err) {
                    res.status(401).send(err);
                }
                else {
                    res.status(200).json(`You are register Successfully`);
                }
            });
        }
    }
}

/**
 get User name and role detail using jwt 
*/
userController.getUser = async (req, res) => {
    try {
            let emp_data = await empModel.find({ });
            if (emp_data.length) {
                return res.status(200).json({message:"Employee list",data:emp_data});
            }
            else {

                return res.status(200).json({message:"no employee record found",data: []});
            }
    }
    catch (err) {
        return res.status(500).send(err);
    }
}
module.exports = userController;