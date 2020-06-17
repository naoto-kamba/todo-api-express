import { Express, Request, Response } from 'express'
import { Task } from './entity/Task'
import { getManager } from 'typeorm'

export const route = (app: Express): void => {
  app.get('/api', (req: Request, res: Response) =>
    res.json({ greeting: 'Hello World!' })
  )
  app.get('/api/connect-test', async (req: Request, res: Response) => {
    const manager = getManager()
    const tasks = await manager.findOne(Task)
    return res.json(tasks)
  })
}
