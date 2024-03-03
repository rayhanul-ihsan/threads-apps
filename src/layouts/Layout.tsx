import React from 'react'
import Footer from '../components/Footer'
import SideBar from '../components/SideBar'
import Profile from '../future/profile/components/Profile'
import { Box, Flex } from '@chakra-ui/react'
import NavbarComp from '../components/NavbarComp'
import Suggests from '../future/suggests/hooks/Suggests'
import BoxSuggest from '../future/suggests/components/BoxSuggest'

interface LayoutProp {
    children: React.ReactNode
}

const Layout = ({children}: LayoutProp) => {
  return (
    <>
        <Flex w='full' bg='#EAECEF'>
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