const {Router} = require('express')
const router = Router()


const { signUp, signIn } = require('../controllers/registeration.controller')


router.post('/signup',signUp)
router.get('/signin',signIn)

module.exports = router;