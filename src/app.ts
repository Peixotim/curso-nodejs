import express from 'express'
import trainerRoutes from "./modules/trainer/trainer.routes"
import pokemonRoutes from "./modules/pokemon/pokemon.routes"
const app = express()

app.use(express.json())
app.use("/trainers",trainerRoutes)
app.use("/pokemons",pokemonRoutes)
export default app;