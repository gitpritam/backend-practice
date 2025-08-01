import { Router } from "express";
import getSingleNoticeDetailsController from "../controllers/Notice/getRecentNotice.controller.js";
import { getAllNoticeController } from "../controllers/Notice/getAllNotice.controller.js";
import { postNoticeController } from "../controllers/Notice/postNoticeController.js";
import deleteNoticeController from "../controllers/Notice/deleteNoticeController.js";

const NoticeRouter = Router();

NoticeRouter.get("/:notice_id", getSingleNoticeDetailsController);
NoticeRouter.get("/", getAllNoticeController);
NoticeRouter.post("/", postNoticeController);
NoticeRouter.delete("/", deleteNoticeController);

export default NoticeRouter;
