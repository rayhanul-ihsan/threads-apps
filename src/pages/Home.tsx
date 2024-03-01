import React from 'react'

import Layout from '../layouts/Layout';
import Cards from '../future/thread/hooks/Cards';
import FormPostThread from '../future/thread/components/FormPostThread';



const Home : React.FC = () => {
  return (
    <>
      <Layout>
        <FormPostThread/>
        <Cards/>
      </Layout>
    </>
  )
}

export default Home