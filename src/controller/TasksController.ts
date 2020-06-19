import { Request, Response } from 'express'
import { Task } from '../entity/Task'

const index = async (req: Request, res: Response): Promise<void> => {
  const tasks = await Task.find()
  res.json(tasks)
}

const show = async (req: Request, res: Response): Promise<void> => {
  const {
    params: { id },
  } = req
  const task = await Task.find({ id: Number(id) })
  res.json(task)
}

const store = async (req: Request, res: Response): Promise<void> => {
  const {
    body: { text },
  } = req
  const task = new Task()
  task.text = text
  await task.save()
  res.status(201)
  res.header('Location', '/' + task.id)
  res.send()
}

const update = async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id)
  const text: string | undefined = req.body.text
  const isFinished: boolean | undefined = Boolean(req.body.isFinished)

  const task = await Task.findOne(id)
  if (typeof task === 'undefined') {
    res.sendStatus(404)
  } else {
    if (typeof text !== 'undefined') task.text = text
    if (typeof isFinished !== 'undefined') task.isFinished = isFinished
    await task.save()
    res.sendStatus(204)
  }
}

const destroy = async (req: Request, res: Response): Promise<void> => {
  const {
    params: { id },
  } = req

  const task = await Task.findOne(Number(id))
  if (typeof task === 'undefined') {
    res.sendStatus(404)
  } else {
    await task.remove()
    res.sendStatus(204)
  }
}

export const TasksController = {
  index,
  show,
  store,
  update,
  destroy,
}
