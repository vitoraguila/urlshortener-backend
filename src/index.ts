import express from "express";
import mongoDBConnect from "./database";
import routes from "./routes";

const app = express();
mongoDBConnect();

app.use(express.json());
app.use(routes);

app.listen(3001);
