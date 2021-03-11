var express = require('express');
var router = express.Router();

var SignupController = require('../controllers/signup')

router.get('/', SignupController.Index);

module.exports = router;

var PostsController = require('../controllers/posts')

router.get('/', PostsController.Index);

module.exports = router;
