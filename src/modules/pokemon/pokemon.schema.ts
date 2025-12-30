import { Schema } from "mongoose";
import {v4 as uuidv4 } from "uuid";
import { PokemonType } from "./pokemon.enum";
export const PokemonSchema = new Schema( 
  {
    uuid:{
      type: String,
      default: uuidv4,
      unique: true,
    },
    name:{
      type : String,
      required: true
    },
    type:{
      type: String,
      required:true,
      enum:Object.values(PokemonType),
    },
    level:{
      type: Number,
      required: true,
      default: 1,
    } ,
    trainer:{
      type: Schema.ObjectId,
      ref: 'Trainer'
    }
  },
  {
    timestamps: true
  }
)