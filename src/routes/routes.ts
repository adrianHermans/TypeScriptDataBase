import { listUsersController } from "./../modules/users/controllers/listUsersController";
import { createUsersController } from "./../modules/users/controllers/createUsersController";
import { authenticateController } from "./../modules/authenticate/controllers/authenticateController";
import { Router } from "express";

const routes = Router();

const ListUsersController = new listUsersController();
const CreateUserController = new createUsersController();
const AuthenticateController = new authenticateController();

routes.get("/user", ListUsersController.handle);
routes.post("/user", CreateUserController.handle);
routes.post('/login', AuthenticateController.handle);


export { routes };
