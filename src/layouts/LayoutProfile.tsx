import React from 'react'
import Footer from '../components/Footer'
import Suggest from '../features/suggests/components/SuggestComp'
import SideBar from '../components/SideBar'
import Profile from '../features/profile/components/Profile'
import { Box, Flex } from '@chakra-ui/react'
import NavbarComp from '../components/NavbarComp'
import BoxSuggest from '../features/suggests/components/BoxSuggest'

interface LayoutProp {
    children: React.ReactNode
}

const LayoutProfile = ({children}: LayoutProp) => {

  return (
    <>
        <Flex w='full' bg='#EAECEF' h={'full'} >
            <Box display={{base:'none', md:'block'}}  w={'20%'}> 
                <SideBar/>
            </Box>
           <Flex flexWrap={'wrap'} w={'100%'}>
           <Box  w={{base:'100%',lg:'65%',xl:'69%'}}  mt={4}  >
            {children}
            </Box>
            <Box position={'relative'} display={{base:'none',lg:'block',xl:'block'}}  w={{base:'100%',lg:'30%',xl:'30%'}}  mt={4} >
                <Box position={'fixed'}>
                    <BoxSuggest/>
                    <Footer/>
                </Box>
            </Box>
            <Box bottom={'-96vh'} position={'fixed'}   w={{base:'100%',lg:'30%',xl:'30%'}} mt={4} >
                <NavbarComp/>
            </Box>
           </Flex>
        </Flex>
    </>
  )
}

export default LayoutProfile