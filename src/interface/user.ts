export interface IUser{
    id?: number
    full_name?: string
    user_name?: string
    email?: string
    password?: string
    profile_picture?: string
    image_cover?: string
    bio?: string
}

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
export interface IThread {
    content: string
    // email: string
    image: string
}