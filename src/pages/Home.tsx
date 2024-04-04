import React from 'react'
import Layout from '../layouts/Layout';
import Cards from '../features/thread/components/Cards';
import FormPostThread from '../features/thread/components/FormPostThread';

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