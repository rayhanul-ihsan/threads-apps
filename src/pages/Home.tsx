import { Box, Flex, Grid, GridItem} from '@chakra-ui/react'
import React from 'react'

import Cards from '../components/Cards';
import SideBar from '../components/SideBar';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Footer from '../components/Footer';
import Suggest from '../components/Suggest';



const Home : React.FC = () => {
  return (
    <>
        <Flex w='full' bg='#EAECEF'>
            <Box w={{base:'100%',lg:'22rem',xl:'26rem'}} >
                <SideBar/>
            </Box>
           <Flex flexWrap={'wrap'}>
           <Box w={{base:'100%',lg:'65%',xl:'50%'}}>
                <Header/>
                <Cards/>
            </Box>
            <Box w={{base:'100%',lg:'35%',xl:'40%'}}>
                <Profile />
                <Suggest/>
                <Footer/>
            </Box>
           </Flex>
        </Flex>
    </>
  )
}

export default Home