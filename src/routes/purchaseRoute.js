import { Router } from "express";

import * as PurchaseController from "../controllers/purchaseController";
import  {verifyUserToken} from "../middleware/verifyToken"

const route=Router();
// route.use(verifyUserToken);
route.route("/")
.post(PurchaseController.createController)
.get(PurchaseController.getAllController);

route.route("/:id")
.patch(PurchaseController.updateController)
.get(PurchaseController.getOneController)
.delete(PurchaseController.deleteController);
export default route;