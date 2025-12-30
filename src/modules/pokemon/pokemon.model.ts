import { model } from "mongoose";
import { IPokemon } from "./pokemon.interface";
import { PokemonSchema } from "./pokemon.schema";

export const PokemonModel = model<IPokemon>('Pokemon',PokemonSchema)