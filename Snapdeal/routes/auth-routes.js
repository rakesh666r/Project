import { Router } from "express";
import { registerController } from "../controllers/auth-controller.js";

const AuthRouter =Router();

AuthRouter.post('/register', registerController)


export default AuthRouter;