import following from '../mocks/following'
import DaftarFollowing from './Daftar-following'

export default function DftrFollowing() {

  return (
    <>
        
        {following.map((item, index) => (
                <DaftarFollowing
                key={index}
                id={item.id}
                name={item.name}
                username={item.username}
                avatar={item.avatar}
                isFollowing={item.isFollowing}
                />
            ))
        }
    </>
  )
}
