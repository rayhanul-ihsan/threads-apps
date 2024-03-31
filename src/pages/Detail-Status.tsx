import React from 'react'

import Layout from '../layouts/Layout';
import Status from '../features/reply/components/Status';
import { useParams } from 'react-router-dom';2



const DetailStatus : React.FC = () => {
  const param = useParams();
  const id = param.id
  return (
    <>
      <Layout>
        <Status id={parseInt(id!)}/> 
      </Layout>
    </>
  )
}

export default DetailStatus