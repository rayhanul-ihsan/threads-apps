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
        <Flex w='100%' bg='#EAECEF'>
            <Box w={{base:'100%',lg:'none',xl:'250px'}}>
                <SideBar/>
            </Box>
           <Flex flexWrap={'wrap'}>
           <Box w={{base:'100%',lg:'65%',xl:'700px'}} mt={4}  >
                <Header/>
                <Cards/>
            </Box>
            <Box w={{base:'100%',lg:'30%',xl:'30%'}} mt={4} >
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