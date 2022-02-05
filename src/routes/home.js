let express = require('express');
let router = express.Router();
let controller = require('../controllers/indexController');

/* GET */
router.get('/', controller.home);
router.get('/favorites', controller.favorites);
router.get('/form', controller.form);

module.exports = router;