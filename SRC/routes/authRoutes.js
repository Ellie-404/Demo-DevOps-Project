
//Import for express and controller
import { Router } from "express";
import * as authController from "../controllers/authController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/register", authController.register);
router.post("/login", authController.login);

router.get("/verify", verifyToken, authController.verify)
export default router;