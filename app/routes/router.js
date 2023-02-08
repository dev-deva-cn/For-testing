const {Router} = require("express")
const {GetAll_Qus_categories} = require('../controller/examController/qus_categoryController.js')
const router = Router();
router.get('/',GetAll_Qus_categories)
module.exports = router