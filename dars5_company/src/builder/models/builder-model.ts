import { Column, Model, Table, DataType } from 'sequelize-typescript';
import { ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Company } from 'src/company/models/company-model';
@Table({
  tableName: 'builders',
})
export class BuilderModel extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @Column({
    allowNull: false,
    unique: true,
  })
  full_name: string;
  @Column({
    allowNull: false,
  })
  birth_day: Date;
  @Column({
    allowNull: false,
  })
  salary: number;
  @Column({
    type: DataType.INTEGER,
  })
  @ForeignKey(() => Company)
  company_id: number;

  @BelongsTo(() => Company)
  company: Company;

  @Column({ defaultValue: true })
  isActive: boolean;
}
