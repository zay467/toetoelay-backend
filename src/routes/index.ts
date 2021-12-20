import { Express, Request, Response } from "express";
import {
  createShortUrl,
  handleRedirect,
  getAnalytics,
} from "../controllers/shortUrl.controller";
import validate from "../middleware/validateResource";
import shortUrlSchema from "../schemas/createShortUrl.schema";

function routes(app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => {
    return res.send("App is healthy.");
  });

  app.post("/api/url", validate(shortUrlSchema), createShortUrl);

  app.get("/api/analytics", getAnalytics);

  app.get("/:shortId", handleRedirect);
}

export default routes;
