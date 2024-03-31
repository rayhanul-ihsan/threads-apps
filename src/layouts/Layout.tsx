import React from 'react'
import Footer from '../components/Footer'
import SideBar from '../components/SideBar'
import Profile from '../features/profile/components/Profile'
import { Box, Flex } from '@chakra-ui/react'
import NavbarComp from '../components/NavbarComp'
import Suggests from '../features/suggests/hooks/Suggests'
import BoxSuggest from '../features/suggests/components/BoxSuggest'

interface LayoutProp {
    children: React.ReactNode
}

const Layout = ({children}: LayoutProp) => {
  return (
    <>
        <Flex w='full' >
            <Box display={{base:'none', md:'block'}} w={'20%'}> 
                <SideBar/>
            </Box>
           <Flex flexWrap={'wrap'} w={'100%'}>
           <Box  w={{base:'100%',lg:'65%',xl:'69%'}}  mt={4}  >
            {children}
            </Box>
            <Box   pos={'relative'} w={{base:'100%',lg:'30%',xl:'30%'}} h={'100vh'}  >
                <Box position={'fixed'} >
                    <Profile />
                    <BoxSuggest/>
                    <Footer/>
                </Box>
            </Box>
            <Box bottom={'-95vh'} position={'fixed'}  w={{base:'100%',lg:'30%',xl:'30%'}} mt={4} >
                <NavbarComp/>
            </Box>
           </Flex>
        </Flex>
    </>
  )
}

export default Layout