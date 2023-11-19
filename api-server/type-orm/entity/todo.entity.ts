// typeORM entitiy file
// learn more about it in the docs: https://typeorm.io/
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('todo')
export class TodoEntity {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column({ type: 'mediumtext' })
  title: string = '';

  @Column('text')
  content: string = '';
}
