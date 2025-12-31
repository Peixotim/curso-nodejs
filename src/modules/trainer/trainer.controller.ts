import { Request , Response } from "express";
import { TrainerService } from "./trainer.service";

const service = new TrainerService();
export class TrainerController{

  public async create(req: Request, res: Response) {
    try {
      const newTrainer = await service.create(req.body);
      return res.status(201).json(newTrainer);
    } catch (error: any) {
      return res.status(error.statusCode || 500).json({
        message: error.message || "Internal server error"
      });
    }
  }

  public async get(req:Request,res:Response){
    try{
      const trainers = await service.get();
      return res.status(200).json(trainers);
    }catch (error: any) {
      return res.status(error.statusCode || 500).json({
        message: error.message || "Internal server error"
      });
    }
  }

  public async getByUuid(req:Request,res:Response){
    try{
      const {uuid} = req.params;
      const trainer = await service.getByUuid(uuid);
      return res.status(200).json(trainer);
    }catch (error: any) {
      return res.status(error.statusCode || 500).json({
        message: error.message || "Internal server error"
      });
    }
  }

  public async delete(req:Request,res:Response){
    try{
      const {uuid} = req.params;
      const trainerDelete = await service.delete(uuid);
      return res.status(200).json(trainerDelete);
    }catch (error: any) {
      return res.status(error.statusCode || 500).json({
        message: error.message || "Internal server error"
      });
    }
  }
}