import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

type Role = 'USER' | 'ADMIN' | 'SUPERADMIN';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsEnum(['USER', 'ADMIN', 'SUPERADMIN'])
  role: Role;
}
