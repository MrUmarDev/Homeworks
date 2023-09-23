import { Column, Model, Table, DataType, HasMany } from "sequelize-typescript";
import { Machine } from "../../machine/models/machine.model";
import { Builder } from "../../builder/models/builder.model";

interface ICompany {
  name: string;
  address: string;
  phone: string;
}
@Table({
  tableName: 'companies',
  createdAt: true,
  underscored: true,
})
export class Company extends Model<Company, ICompany> {
  @Column({
    type: DataType.BIGINT,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  })
  id: number;
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  name: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  address: string;
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  phone: boolean;

  @HasMany(()=>Builder)
  builder: Builder[];

  @HasMany(()=>Machine)
  machine: Machine[];
}

