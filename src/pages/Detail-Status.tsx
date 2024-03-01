import React from 'react'

import Layout from '../layouts/Layout';
import Coment from '../components/Coment';
import Status from '../future/reply/components/Status';



const DetailStatus : React.FC = () => {
  return (
    <>
      <Layout>
        <Status/>  
        <Coment/>
      </Layout>
    </>
  )
}

export default DetailStatus