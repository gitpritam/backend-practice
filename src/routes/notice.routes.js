import { Router } from "express";
import getSingleNoticeDetailsController from "../controllers/Notice/getRecentNotice.controller.js";
import { getAllNoticeController } from "../controllers/Notice/getAllNotice.controller.js";

const NoticeRouter = Router();

NoticeRouter.get("/:notice_id", getSingleNoticeDetailsController);
NoticeRouter.get("/", getAllNoticeController);

export default NoticeRouter;
