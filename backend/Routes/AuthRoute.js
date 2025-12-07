const { Signup,Login } = require("../Controllers/AuthControllers.js");
const {userVerification}=require("../Middlewares/AuthMiddleware.js");
const router = require("express").Router();

router.post("/signup", Signup);
router.post('/login', Login);
router.post('/',userVerification)



module.exports = router;