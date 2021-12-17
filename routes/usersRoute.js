const express = require("express");

let router = express.Router();
const { getUsers,createUser,updateUser,deleteUser } = require("../controllers/userControllers.js");

router.route("/").get(getUsers);

router.route("/create-user").post(createUser);

router.route("/:id").put(updateUser);

router.route("/:id").delete(deleteUser);


module.exports = router;
