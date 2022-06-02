export class LoginDTO {
    email : string;
    password : string;
}

export class LoginResponseDTO {
    token : string;
}

export class RegisterResponseDTO {
    userName: string;
    email: string;
    token: string;
}
