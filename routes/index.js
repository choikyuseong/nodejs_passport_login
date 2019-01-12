const express = require('express');
const router = express.Router();

//welcome page
router.get("/", (req,res,next) =>res.render('welcome'));

module.exports = router;