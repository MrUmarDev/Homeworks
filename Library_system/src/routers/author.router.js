const {Router} = require('express')
const { getAll, create, getOne } = require('../controllers/authors.controllers')

const router = Router()

router.get("/author/getAll",getAll )
router.post("/author/add" , create)
router.get("/author/getOne/:id" ,getOne )



module.exports = router;