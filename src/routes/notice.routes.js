import { Router } from "express";
import getSingleNoticeDetailsController from "../controllers/Notice/getSingleNotice.controller.js";
import { getAllNoticeController } from "../controllers/Notice/getAllNotice.controller.js";
import { postNoticeController } from "../controllers/Notice/postNoticeController.js";
import deleteNoticeController from "../controllers/Notice/deleteNoticeController.js";

const NoticeRouter = Router();

NoticeRouter.get("/", getAllNoticeController);
NoticeRouter.get("/:notice_id", getSingleNoticeDetailsController);
NoticeRouter.post("/", postNoticeController);
NoticeRouter.delete("/:notice_id", deleteNoticeController);

export default NoticeRouter;
