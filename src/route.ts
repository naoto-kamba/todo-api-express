import { Express } from 'express'
import { ConnectTestController } from './controller/ConnectTestController'
import { HelloWorldController } from './controller/HelloWorldController'

export const route = (app: Express): void => {
  app.get('/api', HelloWorldController.index)
  app.get('/api/connect-test', ConnectTestController.find)
}
