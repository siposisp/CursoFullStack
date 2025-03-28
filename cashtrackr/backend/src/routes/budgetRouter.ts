//Router es un middleware de Express que permite crear rutas de manera modular.
import { Router } from 'express';
import { BudgetController } from '../controllers/BudgetController';

//Se crea una instancia de Router, que servirá para definir rutas de la API.
const router = Router();

//Se define una ruta
// se deja solo '/' porque es la misma url que se puso en server.ts
//router.get('/', (req, res) => {
//    console.log('Desde /api/budgets')
//})
router.get('/', BudgetController.getAll)

//Se exporta el router para que pueda ser importado en otro archivo, como server.ts
export default router;
