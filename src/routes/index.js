import { Router } from "express";

import { TeacherRouter } from "./teacher.routes.js";
import { StudentRouter } from "./student.routes.js";
import NoticeRouter from "./notice.routes.js";
import EventRouter from "./event.routes.js";

export const MainRrouter = Router();

MainRrouter.use("/students", StudentRouter);
MainRrouter.use("/teachers", TeacherRouter);
MainRrouter.use("/notice", NoticeRouter);
MainRrouter.use("/events", EventRouter);
