import { Entity, Column } from 'typeorm'

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number

  @Column('text')
  text: string

  @Column()
  isFinished: boolean
}
