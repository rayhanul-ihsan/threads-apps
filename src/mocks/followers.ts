interface Followers  {
    id : number
    name :string
    username :string
    avatar :string
    is_following:boolean
}[];

const foll : Followers[]= 
[
    {
        id : 1,
        name: "Parid",
        username : "@parid",
        avatar : "https://bit.ly/kent-c-dodds",
        is_following: true
    },
    {
        id : 2,
        name: "alex",
        username : "@alex",
        avatar : "https://bit.ly/ryan-florence",
        is_following: false
    },
    {
        id : 3,
        name: "koko",
        username : "@koko",
        avatar : "https://bit.ly/prosper-baba",
        is_following: false
    },
    {
        id : 4,
        name: "Ahmad",
        username : "@ahmad",
        avatar : "https://bit.ly/code-beast",
        is_following: true
    }
]


export default foll