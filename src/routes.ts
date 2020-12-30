import { Router, Request, Response } from "express";

const routes = Router();

import UserController from "./controllers/UserController";

routes.get("/", (req: Request, res: Response) => {
	return res.send("Home");
});

routes.get("/users", UserController.index);
routes.post("/users/create", UserController.create);

export default routes;
