import { UUID } from "crypto";

export class User {
    userId: UUID;
    username: string;
    roles: Array<string>;
    password: string;
}

export type FindAllUsersResponseDto = Array<Omit<User, "password">>;

export type FindUserByIdParamsDto = Pick<User, "userId">


export class FindUserByIdResponseDto {
    userId: UUID;
    username: string;
    roles: Array<string>;
}