const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');

router.post('/register',ctrlUser.register);

router.get('/userlist',ctrlUser.userslist);

router.get('/',ctrlUser.home);

module.exports = router;