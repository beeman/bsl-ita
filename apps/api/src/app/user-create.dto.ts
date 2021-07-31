import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserCreateDto {
  @IsEmail({}, { message: 'Oiga pues, dame correo' })
  email: string;

  @IsNotEmpty()
  username: string;
}
