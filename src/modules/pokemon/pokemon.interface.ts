import { Document, Types } from "mongoose";
import { PokemonType } from "./pokemon.enum";

export interface Pokemon extends Document{
  uuid : string;
  name : string;
  type : PokemonType;
  level : number;
  trainer?:Types.ObjectId
}