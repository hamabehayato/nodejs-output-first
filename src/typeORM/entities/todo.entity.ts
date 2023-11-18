import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("todo")
export class Todo {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column({ type: "mediumtext" })
  title: string = "";

  @Column("text")
  content: string = "";
}
