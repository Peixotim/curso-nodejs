import { Router } from "express";
import { PokemonController } from "./pokemon.controller";

const router = Router();
const controller = new PokemonController();

router.get('/', /* Colocar aqui o metodo */ )
router.post('/', controller.create )
router.delete('/', /* Colocar aqui o metodo */ )
router.patch('/', /* Colocar aqui o metodo */ )

export default router;