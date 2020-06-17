import { Request, Response } from 'express'

export const HelloWorldController = {
  index: async (req: Request, res: Response): Promise<void> => {
    res.json({ greeting: 'Hello World!' })
  },
}
