import foll from '../mocks/followers'
import DaftarFollowers from './Daftar-followers'

export default function DftrFollowers() {

  return (
    <>
        
        {foll.map((item, index) => (
                <DaftarFollowers
                key={index}
                id={item.id}
                name={item.name}
                username={item.username}
                avatar={item.avatar}
                is_following={item.is_following}
                />
            ))
        }
    </>
  )
}
