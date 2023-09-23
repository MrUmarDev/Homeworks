
import { ApiProperty } from '@nestjs/swagger';
import {Table, Column, ForeignKey, Model, DataType} from 'sequelize-typescript'
import { User } from 'src/users/models/user.module';
import { Role } from './role.module';


@Table({tableName: 'user_roles', createdAt: false, updatedAt: false})
export class UserRoles extends Model<UserRoles> {
    @ApiProperty({example: 1, description: 'Unique name'})
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    id: number;
    
    @ApiProperty({example: 1, description: 'User ID'})
    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: true
    })
    userId: number;

    @ApiProperty({example: 1, description: 'Role ID'})
    @ForeignKey(() => Role)
    @Column({
        type: DataType.INTEGER,
        allowNull: true
    })
    roleId: number;
}
