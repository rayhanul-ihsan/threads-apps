import React from 'react'

import FollowsComp from '../future/follows/components/FollowsComp';
import DftrFollowers from '../components/DftrFollowers';
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