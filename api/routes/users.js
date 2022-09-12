import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//     res.send("hello user, yor are logged in!");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("hello user, yor are logged in and you can delete your account!");
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("hello admin, yor are logged in and you can delete all accounts!");
// });

// update
router.put("/:id", verifyUser, updateUser);

// delete
router.delete("/:id", verifyUser, deleteUser);

// get user by id
router.get("/:id", verifyUser, getUser);

// get all users
router.get("/", verifyAdmin, getUsers);

export default router;