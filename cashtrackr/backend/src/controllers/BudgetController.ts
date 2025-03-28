import type { Request, response } from 'express'

//poniendo req: Request, res: Response en vez de req y res eliminamos el any, que no se que es, pero es malo
export class BudgetController {
    static getAll = async (req: Request, res: Response) => {
        console.log('Desde /api/budgets')
    }
}

export default BudgetController;