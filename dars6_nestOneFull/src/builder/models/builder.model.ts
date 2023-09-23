import { Column, Model, Table, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Company } from "../../company/models/company.model";

interface IBuilder {
  full_name: string;
  birth_day: string;
  salary: number;
  companyId: number;
}

@Table({
  tableName: 'builder',
  createdAt: true,
  underscored: true,
})
export class Builder extends Model<Builder, IBuilder> {
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
  full_name: string;

  @Column({
    type: DataType.DATEONLY,
    allowNull: false,
  })
  birth_day: Date;

  @Column({
    type: DataType.DECIMAL,
    allowNull: true,
  })
  salary: number;

  @Column({
    type: DataType.BIGINT,
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
  company: Company;
}
