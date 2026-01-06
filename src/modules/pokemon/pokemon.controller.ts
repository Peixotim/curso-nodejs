import { Request,Response } from "express";
import { PokemonService } from "./pokemon.service";
import { PokemonCreateDTO } from "./DTOs/pokemon.create.dto";

const service = new PokemonService()

export class PokemonController{
  public async create(req : Request, res : Response){
    const newPokemon = await service.create(req.body);
    return res.status(201).json(newPokemon);
  }

  public async get(req: Request, res: Response){
    const pokemons = await service.get();
    return res.status(200).json(pokemons);
  }

  public async delete(req: Request , res : Response){
    await service.delete(req.body);
    return res.status(204);
  }
}