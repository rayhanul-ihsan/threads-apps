import React from 'react'

import Layout from '../layouts/Layout';
import Coment from '../features/reply/components/Coment';
import Status from '../features/reply/components/Status';
import { useParams } from 'react-router-dom';
import Replys from '../features/reply/hooks/Replys';



const DetailStatus : React.FC = () => {
  const param = useParams();
  const id = param.id
  return (
    <>
      <Layout>
        <Status id={parseInt(id!)}/> 
        <Replys/>
      </Layout>
    </>
  )
}

export default DetailStatus