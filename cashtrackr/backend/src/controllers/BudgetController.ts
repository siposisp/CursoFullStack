import type { Request, Response } from 'express'

//poniendo req: Request, res: Response en vez de req y res eliminamos el any, que no se que es, pero es malo
export class BudgetController {
    static getAll = async (req: Request, res: Response) => {
        console.log('Desde GET /api/budgets')
    }
    static create = async (req: Request, res: Response) => {
        console.log('Desde POST /api/budgets')
    }
    static update = async (req: Request, res: Response) => {
        console.log('Desde PUT /api/budgets')
    }
    static delete = async (req: Request, res: Response) => {
        console.log('Desde DELETE /api/budgets')
    }
}


export default BudgetController;