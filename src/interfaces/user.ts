export interface User {
    uuid?: string;
    name?: string;
    email: string;
    password: string;
    accessToken?: string;
    repeatPassword?: string;
}