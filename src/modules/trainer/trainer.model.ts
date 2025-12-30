import { model } from "mongoose";
import { ITrainer } from "./trainer.interface";
import { TrainerSchema } from "./trainer.schema";

export const TrainerModel = model<ITrainer>('Trainer',TrainerSchema)