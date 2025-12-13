const { Signup,Login } = require("../Controllers/AuthControllers.js");
const {userVerification}=require("../Middlewares/AuthMiddleware.js");
const router = require("express").Router();


/* ✅ Handle preflight requests */
router.options("/*", (req, res) => {
  res.sendStatus(200);
});

router.post("/signup", Signup);
router.post('/login', Login);
router.post('/',userVerification)



module.exports = router;