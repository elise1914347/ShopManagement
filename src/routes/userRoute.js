import { Router } from "express";
import * as UserController from "../controllers/userController";
import { checkUser, loginUser } from "../middleware/checkUserExist";
import { verifyUserToken } from "../middleware/verifyToken";
const route = Router();
route.post("/login", loginUser);

route
  .route("/")
  .post(checkUser, UserController.createController)
  .get(UserController.getAllController);
  route.use(verifyUserToken);

route
  .route("/:id")
  .patch(UserController.updateController)
  .get(UserController.getOneController)
  .delete(UserController.deleteController);

export default route;