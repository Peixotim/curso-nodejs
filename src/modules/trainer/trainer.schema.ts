import { Schema, Types } from "mongoose";
import {v4 as uuidv4} from "uuid";
export const TrainerSchema = new Schema({
  uuid:{
    type: String,
    default : uuidv4,
    unique:true,
  },
  name:{
    type : String,
    required : true,
    min: 0
  },
  age:{
    type: Number,
    required: true,
  },
  city:{
    type: String,
    required: true
  },
  trofeus:{
    type : [String],
    default:[]
  },
  pokemons:[
    {
      type:Schema.Types.ObjectId,
      ref:'Pokemon'
    }
  ]
},{
  timestamps:true
})