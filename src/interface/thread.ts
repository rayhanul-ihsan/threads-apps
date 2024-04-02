export interface IThread {
    author: {
        full_name: string,
        profile_picture: string,
        user_name: string
    },
    content: string,
    createdAt: string,
    image: string,
    isLiked?: boolean,
    updateAt?: Date | null,
    id: number,
    likes: Likes[],
    replies: any[] 
    reply: number
}

export interface IPostThread {
    content: string
    image: File | null 
}
export interface PostThread {
    content: string,
    image: File | null
}
export interface ReplyThread {
    content: string,
    image: File | null,
    author: number
}

export interface Likes {
    id: number
    author: {
        id: number
    }
}

export interface Like {
    id: number,
    author: {
        id: number
    }
}