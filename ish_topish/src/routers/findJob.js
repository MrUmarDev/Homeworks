const {Router} = require("express");
const { get, getOne, add, remove } = require("../controllers/findJob.controller");
const isAuth = require("../middleware/isAuth");


const router = Router()
router.post('/job/add',add)
router.get('/job/getAll',isAuth, get)
router.get("/job/getOne",isAuth, getOne)
router.delete("/job/delete",isAuth, remove)

module.exports = router;