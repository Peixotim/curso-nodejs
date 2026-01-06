import { BadRequestError, NotFoundError } from "../../shared/errors/errors";
import { TrainerCreate } from "./DTOs/trainer.create.dto";
import { TrainerModel } from "./trainer.model";
import { Types } from "mongoose";
import { validate as isUUID } from "uuid";

export class TrainerService{

  public async create(request : TrainerCreate){

    if(!request){
      throw new BadRequestError(`Error: Check your request, as it was received empty.`)
    }

    if(request.pokemonsId == null || request.pokemonsId == undefined){
      request.pokemonsId = [];
    }

    if(request.trofeus == null || request.trofeus == undefined){
      request.trofeus = [];
    }
    const newTrainer = await TrainerModel.create({
      name : request.name,
      age: request.age,
      city: request.city,
      trofeus: request.trofeus,
      pokemons: request.pokemonsId.map(id => new Types.ObjectId(id))
    })

    return newTrainer;
  }


  public async get(){
    const trainers = await TrainerModel.find()
    return trainers;
  }

  public async getByUuid(uuid : string){
    if (!isUUID(uuid)) {
      throw new BadRequestError("Invalid UUID format");
   }
    const trainer = await TrainerModel.findOne({uuid});

    if(!trainer){
      throw new NotFoundError(`Error, trainer not found !`);
    }

    return trainer;
  }

  public async delete(uuid : string){
    if (!isUUID(uuid)) {
      throw new BadRequestError("Invalid UUID format");
   }

    const trainer = await TrainerModel.findOneAndDelete({uuid})


    if(!trainer){
      throw new NotFoundError(`Error, trainer not found !`);
    }

    console.log(`Trainer ${trainer.uuid} deleted at ${new Date()}`);

    return trainer;
  }

  public async findOneBy(uuid : string){

    if(!isUUID(uuid)){
      throw new BadRequestError("Invalid UUID format");
    }
    
    const pokemon = await TrainerModel.findById(uuid);
  }
}