export class UserLoginBodyDto {
    username: string;
    password: string;
}

export class UserLoginResponseDto {
    username: string;
    roles: Array<string>;
}