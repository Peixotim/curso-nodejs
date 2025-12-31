import { Router } from "express";
import { TrainerController } from "./trainer.controller";

const router = Router();
const controller = new TrainerController();

router.get("/", controller.get.bind(controller));
router.get("/:uuid", controller.getByUuid.bind(controller));
router.post("/", controller.create.bind(controller));
router.delete("/:uuid", controller.delete.bind(controller));

export default router;
