import { Express } from 'express'
import { ConnectTestController } from './controller/ConnectTestController'
import { HelloWorldController } from './controller/HelloWorldController'
import { TasksController } from './controller/TasksController'

export const route = (app: Express): void => {
  app.get('/api', HelloWorldController.index)
  app.get('/api/connect-test', ConnectTestController.find)
  app.get('/api/tasks', TasksController.index)
  app.get('/api/tasks/:id', TasksController.show)
  app.post('/api/tasks', TasksController.store)
  app.patch('/api/tasks/:id', TasksController.update)
  app.delete('/api/tasks/:id', TasksController.destroy)
}
