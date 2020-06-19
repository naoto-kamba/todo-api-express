import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm'

@Entity()
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  text!: string

  @Column({
    default: false,
  })
  isFinished!: boolean
}
