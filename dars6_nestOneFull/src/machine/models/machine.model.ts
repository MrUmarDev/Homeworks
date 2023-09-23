import { Column, Model, Table, DataType, HasMany, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Machine_Driver } from "../../machine_driver/models/machine_driver.model";
import { Company } from "../../company/models/company.model";

interface IMachine {
  model: string;
  name: string;
  companyId: number;
}
@Table({
  tableName: 'machine',
  createdAt: true,
  underscored: true,
})
export class Machine extends Model<Machine, IMachine> {
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
  model: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
  @Column({
    type: DataType.BIGINT,
    unique: true,
    allowNull: false,
  })
  companyId: number;

  @ForeignKey(() => Company)
  @Column({
    type: DataType.INTEGER,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  companyId: number;

  @BelongsTo(() => Company)
  companyId: Company;

  @HasMany(()=>Machine_Driver)
  machine_driver: Machine_Driver[];
}



