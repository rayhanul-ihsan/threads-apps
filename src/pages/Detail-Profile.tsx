import React from 'react'
import LayoutProfile from '../layouts/LayoutProfile'
import ProfileDetailComp from '../future/profile/components/ProfileDetailComp'

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