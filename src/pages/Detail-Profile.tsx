import React from 'react'
import LayoutProfile from '../LayoutProfile'
import ProfileDetailComp from '../components/ProfileDetailComp'

const DetailProfile: React.FC = () => {
  return (
    <>
        <LayoutProfile>
            <ProfileDetailComp/>
        </LayoutProfile>
    </>
  )
}

export default DetailProfile