const express = require("express");
const router = express.Router();

// auth routes
const { register, login } = require("../controllers/auth");
const { checkAuthorizationHeaders, authorizeUser } = require("../middlewares/authenticate");


router.post("/register", register);
router.post("/login", checkAuthorizationHeaders, login);

    
// Name routes
const { createName, updateName, deleteName, getName, getAllName } = require('../controllers/name');
// 
router.post("/name/create", checkAuthorizationHeaders,authorizeUser("createName") ,createName);
router.put("/name/update/:id", checkAuthorizationHeaders,authorizeUser("updateName"), updateName);
router.delete("/name/delete/:id", checkAuthorizationHeaders, authorizeUser("deleteName"), deleteName);
router.get("/name/get/:id", checkAuthorizationHeaders, authorizeUser("readName"), getName);
router.get("/name/getAll", checkAuthorizationHeaders, authorizeUser("readName"), getAllName);

  
module.exports = router;
