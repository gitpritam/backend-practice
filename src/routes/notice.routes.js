import { Router } from "express";
import getSingleNoticeDetailsController from "../controllers/Notice/getRecentNotice.controller.js";

const NoticeRouter = Router();

NoticeRouter.get("/:notice_id", getSingleNoticeDetailsController);

export default NoticeRouter;
