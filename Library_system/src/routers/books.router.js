const {Router} = require('express');
const { getAll, create, getOne } = require('../controllers/books.controller');
const router = Router()

router.get("/books/getAll", getAll)
router.post("/books/add" , create)
router.get("/books/getOne/:id" , getOne)

module.exports = router;