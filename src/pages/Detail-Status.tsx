import { Box, Flex} from '@chakra-ui/react'
import React from 'react'

import SideBar from '../components/SideBar';
import Profile from '../components/Profile';
import Footer from '../components/Footer';
import Suggest from '../components/Suggest';
import Status from '../components/Status';



const DetailStatus : React.FC = () => {
  return (
    <>
        <Flex w='full' bg='#EAECEF'>
            <Box w={{base:'10rem',lg:'22rem',xl:'26rem'}} >
                <SideBar/>
            </Box>
           <Flex flexWrap={'wrap'}>
           <Box w={{base:'100%',lg:'65%',xl:'50%'}}>
                <Status/>  
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

export default DetailStatus