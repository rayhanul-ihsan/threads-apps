// export interface IUser{
//     id:
//     full_name
// }

export interface IUserRegister {
    full_name: string
    user_name: string
    email: string
    password: string
}
export interface IUserLogin {
    user_name: string
    // email: string
    password: string
}