import { ApiProperty } from '@nestjs/swagger';
import {Table, Model, Column, DataType, BelongsToMany} from 'sequelize-typescript'
import { User } from 'src/users/models/user.module';
import { UserRoles } from './user-roles.module';


interface IRole {
    readonly value: string;
    readonly description: string;
}

@Table({tableName: 'roles'})
export class Role extends Model<Role, IRole> {
    @ApiProperty({example: 1, description: 'Unique name'})
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    id: number;

    @ApiProperty({example: 'ADMIN', description: 'Role name'})
    @Column({
        type: DataType.STRING,
        allowNull: true,
        unique: true
    })  
    value: string;

    @ApiProperty({example: 'This is Admin Role', description: 'Description for Role'})
    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    description: string;

    @ApiProperty({example: [User], description: "User" })
    @BelongsToMany(() => User, () => UserRoles)
    users: User[];
}
