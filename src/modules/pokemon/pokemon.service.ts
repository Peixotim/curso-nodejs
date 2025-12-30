import { BadRequestError } from "../../shared/errors/errors";
import { PokemonCreateDTO } from "./DTOs/pokemon.create.dto";
import { PokemonModel } from "./pokemon.model";

export class PokemonService{

  public async create(request : PokemonCreateDTO){
    
    if(!request){
      throw new BadRequestError(`Error: Check your request, as it was received empty.`)
    }

    const newPokemon = PokemonModel.create({
      name: request.name,
      type: request.type,
      level: request.level,
      trainer: request.trainerId
    })

    return newPokemon;
  }
}