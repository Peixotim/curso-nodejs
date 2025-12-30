import { PokemonType } from "../pokemon.enum";

export interface PokemonCreateDTO{
  name: string,
  type:PokemonType,
  level:number,
  trainerId?: string
}