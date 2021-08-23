// //User routing place here

const express = require('express')
const router = express.Router();  // get an instance of the express router
let userController = require('../controllers/userController');

//API Routes are here

router.post('/signup',userController.signupUser);
router.get('/emplist',userController.getUser);

module.exports = router;