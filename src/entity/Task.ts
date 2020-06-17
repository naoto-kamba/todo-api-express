import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm'

@Entity({ synchronize: false })
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
