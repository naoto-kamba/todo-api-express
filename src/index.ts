import express, { Request, Response } from 'express'
import 'reflect-metadata'
import { createConnection } from 'typeorm'

const main = async () => {
  const connection = await createConnection()

  const app = express()
  const port = 3000
  app.get('/', (req: Request, res: Response) => res.send('Hello World!'))

  app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}

main()
