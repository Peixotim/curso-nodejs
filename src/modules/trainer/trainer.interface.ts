import { Document, Types } from 'mongoose'

export interface ITrainer extends Document {
  uuid: string
  name: string
  age: number
  city: string
  trofeus?: string[]
  pokemons?: Types.ObjectId[]
}
