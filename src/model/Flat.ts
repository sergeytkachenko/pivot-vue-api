import {Table, Column, Model, PrimaryKey, AutoIncrement} from 'sequelize-typescript';

@Table
export class Flat extends Model<Flat> {
  @PrimaryKey
  @AutoIncrement
  @Column
  public id!: number;

  @Column
  public Region!: string;

  @Column
  public Gender!: string;

  @Column
  public Color!: string;

  @Column
  public Country!: string;

  @Column
  public Units!: number;

  @Column
  public Price!: number;

  @Column
  public Cost!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}
