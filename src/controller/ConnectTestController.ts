import { Request, Response } from 'express'
import { Task } from '../entity/Task'
import { getManager } from 'typeorm'

export const ConnectTestController = {
  find: async (req: Request, res: Response): Promise<void> => {
    const manager = getManager()
    const tasks: Task | undefined = await manager.findOne(Task)
    res.json(tasks)
  },
}
