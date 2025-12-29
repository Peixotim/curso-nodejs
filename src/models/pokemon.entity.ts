import { Document } from "mongoose";

export interface Pokemon extends Document{
  name : string;
  type: string;
  level : number;
}