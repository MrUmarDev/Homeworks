import { Column, Model, Table, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Machine_Driver } from "../../machine_driver/models/machine_driver.model";

interface IDriver {
  first_name: string;
  last_name: string;
  phone: string;
  driver_license: string;
}

@Table({
  tableName: 'driver',
  createdAt: true,
  underscored: true,
})
export class Driver extends Model<Driver, IDriver> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  first_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  last_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  phone: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  driver_license: string;

  @ForeignKey(() => Machine_Driver)
  @Column({
    type: DataType.INTEGER,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  id: number;

  @BelongsTo(() => Machine_Driver)
  machine_driver: Machine_Driver;
}
