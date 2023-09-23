import { ApiProperty } from "@nestjs/swagger";


export class RemoveRoleDto {
    @ApiProperty({example: 1, description: 'User Id'})
    readonly userId: number;
    
    @ApiProperty({example: "ADMIN", description: 'Role Name'})
    readonly value: string;
}