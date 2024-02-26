import React from 'react'

import Layout from '../layouts/Layout';
import Cards from '../components/Cards';
import Header from '../components/Header';



const Home : React.FC = () => {
  return (
    <>
      <Layout>
        <Header/>
        <Cards/>
      </Layout>
    </>
  )
}

export default Home