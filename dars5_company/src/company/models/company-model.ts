import { Column, Model, Table, DataType } from 'sequelize-typescript';
import { HasMany } from 'sequelize-typescript';
import { BuilderModel } from 'src/builder/models/builder-model';
@Table({
  tableName: 'companies',
})
export class Company extends Model {
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
  name: string;
  @Column({
    allowNull: false,
  })
  adress: string;
  @Column({
    allowNull: false,
    unique: true,
  })
  phone_number: string;

  @Column({ defaultValue: true })
  isActive: boolean;

  @HasMany(() => BuilderModel)
  builders: BuilderModel[];
}
