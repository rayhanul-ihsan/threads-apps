import React from 'react'

import FollowsComp from '../features/follows/components/FollowsComp';
import DftrFollowers from '../features/follows/hooks/FollowCard';
import Layout from '../layouts/Layout';



const Follows : React.FC = () => {
  return (
    <>
      <Layout>
        <FollowsComp/>
      </Layout>
    </>
  )
}

export default Follows