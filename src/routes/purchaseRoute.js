import { Router } from "express";

import * as PurchaseController from "../controllers/purchaseController";

const route=Router();
route.route("/")
.post(PurchaseController.createController)
.get(PurchaseController.getAllController);

route.route("/:id")
.patch(PurchaseController.updateController)
.get(PurchaseController.getOneController)
.delete(PurchaseController.deleteController);
export default route;