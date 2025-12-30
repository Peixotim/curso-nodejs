import { Document, Types } from "mongoose";

export interface Trainer extends Document{

  name: string;
  age : number;
  city: string;
  pokemons?:Types.ObjectId[]
}