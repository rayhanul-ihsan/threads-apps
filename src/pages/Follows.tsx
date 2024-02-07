import { Box, Flex} from '@chakra-ui/react'
import React from 'react'

import SideBar from '../components/SideBar';
import Profile from '../components/Profile';
import Footer from '../components/Footer';
import Suggest from '../components/Suggest';
import FollowsComp from '../components/FollowsComp';
import DaftarFollowers from '../components/Daftar-followers';
import DftrFollowers from '../components/dftrFollowers';



const Follows : React.FC = () => {
  return (
    <>
        <Flex w='full' bg='#EAECEF'>
            <Box w={{base:'10rem',lg:'20%',xl:'20%'}} >
                <SideBar/>
            </Box>
           <Flex flexWrap={'wrap'}>
           <Box w={{base:'100%',lg:'60%',xl:'60%'}}>
                <FollowsComp/>
                <DftrFollowers/>
            </Box>
            <Box w={{base:'100%',lg:'30%',xl:'30%'}}>
                <Profile />
                <Suggest/>
                <Footer/>
            </Box>
           </Flex>
        </Flex>
    </>
  )
}

export default Follows