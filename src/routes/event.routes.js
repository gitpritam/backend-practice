import { Router } from "express";
import { getAllEventDetailsControlller } from "../controllers/Event/getAllEventDetails.controller.js";
import { postEventController } from "../controllers/Event/postEvent.controller.js";


const EventRouter = Router();

EventRouter.get("/", getAllEventDetailsControlller);
EventRouter.post("/", postEventController);



export default EventRouter;