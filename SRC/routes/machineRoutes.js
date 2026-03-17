//Import for express and controller
import { Router } from "express";
import * as machineController from "../controllers/machineController.js";

const router = Router();

router.post("/regMachine", machineController.regMachine);

export default router;