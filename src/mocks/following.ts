interface Following  {
    id : number
    name :string
    username :string
    avatar :string
    isFollowing:boolean
}[];

const following : Following[]= 
[
    {
        id : 1,
        name: "Parid",
        username : "@parid",
        avatar : "https://bit.ly/kent-c-dodds",
        isFollowing: true
    },
    {
        id : 2,
        name: "alex",
        username : "@alex",
        avatar : "https://bit.ly/ryan-florence",
        isFollowing: false
    },
    {
        id : 3,
        name: "koko",
        username : "@koko",
        avatar : "https://bit.ly/prosper-baba",
        isFollowing: false
    },
    {
        id : 4,
        name: "Ahmad",
        username : "@ahmad",
        avatar : "https://bit.ly/code-beast",
        isFollowing: true
    },
    {
        id : 5,
        name: "Padil Palepi",
        username : "@ppalepi",
        avatar : "https://bit.ly/code-beast",
        isFollowing: true
    }
]


export default following