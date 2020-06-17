import express from 'express'
import 'reflect-metadata'
import { createConnection } from 'typeorm'

import { route } from './route'

const main = async () => {
  await createConnection()

  const app = express()
  const port = 80
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  route(app)

  app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}

main()
