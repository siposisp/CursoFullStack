import { Router } from 'express';

const router = Router();

// se deja solo '/' porque es la misma url que se puso en server.ts
router.get('/', (req, res) => {
    console.log('Desde /api/budgets')
})

export default router;
