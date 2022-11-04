import { Router } from "express";

import * as SalesController from "../controllers/salesController";

// import { verifyUserToken } from "../middleware/verifyToken";

const route=Router();
// route.use(verifyUserToken);
route.route("/")
.post(SalesController.createController)
.get(SalesController.getAllController);

route.route("/:id")
.patch(SalesController.updateController)
.get(SalesController.getOneController)
.delete(SalesController.deleteController);
export default route