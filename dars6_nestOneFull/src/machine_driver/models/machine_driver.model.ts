import { Column, Model, Table, DataType, ForeignKey, BelongsTo, HasMany } from "sequelize-typescript";
import { Machine } from "../../machine/models/machine.model";
import { Driver } from "../../driver/models/driver.model";

interface IMachineDriver {
  machineId: number;
  driverId: number;
}

@Table({
  tableName: 'machine_driver',
  createdAt: true,
  underscored: true,
})
export class Machine_Driver extends Model<Machine_Driver, IMachineDriver> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  })
  id: number;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  machineId: number;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  driverId: number;

  @ForeignKey(() => Machine)
  @Column({
    type: DataType.INTEGER,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  companyId: number;

  @BelongsTo(() => Machine)
  machine: Machine;

  @HasMany(() => Driver)
  driver: Driver[];
}
