import React, { useState } from 'react'
import Footer from './components/Footer'
import Suggest from './components/Suggest'
import SideBar from './components/SideBar'
import Profile from './components/Profile'
import { Box, Flex } from '@chakra-ui/react'
import NavbarComp from './components/NavbarComp'

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
                {/* <Toggle
                    checked={isDark}
                    onChange={({ target }) => setIsDark(target.checked)}
                    icons={{ checked: "🌙", unchecked: "🔆" }}
                    aria-label="Dark mode toggle"
                    /> */}
            <Box w={{base:'100%',lg:'30%',xl:'30%'}} mt={4} >
                <Profile />
                <Suggest/>
                <Footer/>
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