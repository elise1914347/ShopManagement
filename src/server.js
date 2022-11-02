import  express  from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import mongoose from "mongoose";
const app = express();

app.use(bodyParser.json());

const dbUrl = process.env.DATABASE_URL;
mongoose.connect(dbUrl, {useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{console.log("Database connected successfully")})
const port = process.env.PORT || 4040;

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
});

export default app;