import { Box, Flex} from '@chakra-ui/react'
import React from 'react'

import SideBar from '../components/SideBar';
import Profile from '../components/Profile';
import Footer from '../components/Footer';
import Suggest from '../components/Suggest';
import Status from '../components/Status';
import Coment from '../components/Coment';
import Layout from '../layouts/Layout';



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