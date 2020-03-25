import { Router } from "express";
import UrlController from "./app/controllers/UrlController";
const routes = Router();

// route for registering new url
routes.post("/url", UrlController.store);

// route for listing all urls
routes.get("/list", UrlController.listUrls);

// route for accessing and verify short url
routes.get("/:urlCode", UrlController.show);

export default routes;
