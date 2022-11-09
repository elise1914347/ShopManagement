import { Router } from "express";

import * as ProductController from "../controllers/productController";
import  {verifyUserToken} from "../middleware/verifyToken"

const route=Router();
// route.use(verifyUserToken);
route.route("/")
.post(ProductController.createController)
.get(ProductController.getAllController);

route.route("/:id")
.patch(ProductController.updateController)
.get(ProductController.getOneController)
.delete(ProductController.deleteController);
export default route