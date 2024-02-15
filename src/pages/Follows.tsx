import React from 'react'

import FollowsComp from '../components/FollowsComp';
import DftrFollowers from '../components/DftrFollowers';
import Layout from '../Layout';



const Follows : React.FC = () => {
  return (
    <>
      <Layout>
        <FollowsComp/>
        <DftrFollowers/>
      </Layout>
    </>
  )
}

export default Follows