import { Request, Response } from "express";
import UrlModel from "../models/Url";

export default {
  async store(req: Request, res: Response) {
    // verify if url is empty
    if (!req.body.originalUrl) {
      return res.status(400).json({ error: "URL can not empty" });
    }
    const findUrl = await UrlModel.findOne({
      originalUrl: req.body.originalUrl
    });
    if (!findUrl) {
      const success = await UrlModel.create(req.body);
      return res.status(200).json(success);
    }
    return res.json(findUrl);
  },

  async show(req: Request, res: Response) {
    // find url param code
    const findCode = await UrlModel.findOne({
      urlCode: req.params.urlCode
    });

    // if not found url code return error 400
    if (!findCode) {
      return res.status(404).json({ error: "Url not found" });
    }

    // update quantity views on url
    await UrlModel.updateOne(
      { urlCode: req.params.urlCode },
      { $inc: { views: 1 } }
    );

    return res.json(findCode);
  },

  async listUrls(req: Request, res: Response) {
    const list = await UrlModel.find().sort([["createdAt", -1]]);

    return res.json(list);
  }
};
