import { Router } from "express";

import { TeacherRouter } from "./teacher.routes.js";
import { StudentRouter } from "./student.routes.js";
import NoticeRouter from "./notice.routes.js";

export const MainRrouter = Router();

MainRrouter.use("/students", StudentRouter);
MainRrouter.use("/teachers", TeacherRouter);
MainRrouter.use("/notice", NoticeRouter);
