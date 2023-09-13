const {Router} = require("express");
const { signup, signin } = require("../controllers/register.controller");

const router = Router()
router.post('/signup',signup)
router.get('/signin',signin )

module.exports = router;
