import { ApiProperty } from '@nestjs/swagger';
import {Table, Column, DataType, Model, BelongsToMany} from 'sequelize-typescript'
import { Role } from 'src/roles/models/role.module';
import { UserRoles } from 'src/roles/models/user-roles.module';

interface IUser {
    readonly name: string;
    readonly email: string;
    readonly password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, IUser> {

    @ApiProperty({example: 1, description: 'Unique id'})
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    id: number;

    @ApiProperty({example: 'user', description: 'User name'})
    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    name: string;

    @ApiProperty({example: 'email@gmail.com', description: 'User email'})
    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    email: string;

    @ApiProperty({example: 'Qwerty!2345', description: 'User password'})
    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    password: string;

    @ApiProperty({example: true, description: 'User Status'})
    @Column ({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    is_Active: boolean;

    @ApiProperty({example: ['Roles'], description: 'User Role'})
    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];
}
