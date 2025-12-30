import { Request,Response } from "express";
import { PokemonService } from "./pokemon.service";
import { PokemonCreateDTO } from "./DTOs/pokemon.create.dto";

const service = new PokemonService()

export class PokemonController{
  public async create(req : Request, res : Response){
    const newPokemon = await service.create(req.body);
    return res.status(201).json(newPokemon);
  }
}