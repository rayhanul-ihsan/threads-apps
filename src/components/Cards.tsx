import React from 'react'
import data from '../mocks/card'
import CardComp from './CardComp'

export default function Cards() {

  return (
    <div>
        
        {data.map((item, index) => (
                <CardComp
                key={index}
                id={item.id}
                name={item.name}
                username={item.username}
                jam={item.jam}
                description={item.description} 
                like={item.like}
                />
            ))
        }
    </div>
  )
}
