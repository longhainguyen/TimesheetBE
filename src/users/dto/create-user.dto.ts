import { IsBoolean, IsEmail, IsIn, IsNotEmpty, IsString, Length, Matches, MaxLength, MinLength } from 'class-validator';
import { Role } from 'src/constant/enum/role.enum';

export class CreateUserDto {
    @IsNotEmpty({ message: 'The userName is required' })
    @Length(3, 255)
    @IsString()
    userName: string;

    @IsNotEmpty({ message: 'The password is required' })
    @IsString()
    // @MinLength(8)
    // @MaxLength(20)
    // @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    //     message:
    //         'Passwords will contain at least 1 upper case letter, Passwords will contain at least 1 lower case letter, Passwords will contain at least 1 number or special character, There is no length validation (min, max) in this regex!',
    // })
    password: string;

    @IsEmail()
    @IsNotEmpty({ message: 'The email is required' })
    email: string;

    @IsIn([Role.ADMIN, Role.USER], { message: 'Role must be either admin or user or manager' })
    role: string;
    branch: string;

    isActive: boolean;
    createAt: Date;
    updateAt: Date;
    manageId: number;
}