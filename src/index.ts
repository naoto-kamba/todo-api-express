import express, { Request, Response } from 'express'
import 'reflect-metadata'
import { createConnection, getManager } from 'typeorm'
import { Task } from './entity/Task'

const main = async () => {
  await createConnection()

  const app = express()
  const port = 80
  app.get('/api', (req: Request, res: Response) =>
    res.json({ greeting: 'Hello World!' })
  )
  app.get('/api/connect-test', async (req: Request, res: Response) => {
    const manager = getManager()
    const tasks = await manager.findOne(Task)
    return res.json(tasks)
  })

  app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}

main()
