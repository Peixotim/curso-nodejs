import { BadRequestError, NotFoundError } from "../../shared/errors/errors";
import { PokemonCreateDTO } from "./DTOs/pokemon.create.dto";
import { PokemonModel } from "./pokemon.model";
import { validate as isUUID } from "uuid";

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

  public async get(){
    const pokemons = await PokemonModel.find();
    if(!pokemons){
      throw new NotFoundError(`Error : There are no registered Pokémon!`)
    }
    return pokemons;
  }

  public async getByUuid(uuid : string){
    if(!isUUID(uuid)){
      throw new BadRequestError(`Invalid UUID format`);
    }
    const pokemon = await PokemonModel.findOne({uuid});

    if(!pokemon){
      throw new NotFoundError(`Error , pokemon not found`);
    }
    return pokemon;
  }

  public async delete(uuid:string){
        if(!isUUID(uuid)){
      throw new BadRequestError(`Invalid UUID format`);
    }

    const pokemonDelete = await PokemonModel.findOneAndDelete({uuid});

    if(!pokemonDelete){
      throw new NotFoundError(`Error , pokemon not found`);
    }

    return pokemonDelete;
  }
}