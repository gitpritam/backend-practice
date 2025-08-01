import { Router } from "express";
import { getAllEventDetailsControlller } from "../controllers/Event/getAllEventDetails.controller.js";
import { postEventController } from "../controllers/Event/postEvent.controller.js";
import getSingleEventController from "../controllers/Event/getSingleNotice.controller.js";
import deleteEventController from "../controllers/Event/deleteEvent.controller.js";

const EventRouter = Router();

EventRouter.get("/", getAllEventDetailsControlller);
EventRouter.get("/:_id", getSingleEventController);
EventRouter.post("/", postEventController);
EventRouter.delete("/:_id", deleteEventController);

export default EventRouter;
