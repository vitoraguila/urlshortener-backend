import express from "express";
import mongoDBConnect from "./database";
import routes from "./routes";
import cors from "cors";

const app = express();
mongoDBConnect();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3003);
