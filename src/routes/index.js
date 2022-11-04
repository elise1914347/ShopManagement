import express from "express";
import productRoute from "./productRoute";
import salesRoute from "./salesRoute";
import userRoute from "./userRoute";
import purchaseRoute from "./purchaseRoute";


const app = express();
app.use("/product",productRoute)
app.use("/user",userRoute)
app.use("/sales",salesRoute)
app.use("/purchase",purchaseRoute)


export default app;