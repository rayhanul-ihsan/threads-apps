import React, { useState } from 'react'
import Footer from './components/Footer'
import Suggest from './components/Suggest'
import SideBar from './components/SideBar'
import Profile from './components/Profile'
import { Box, Button, Flex, Icon, useColorMode } from '@chakra-ui/react'
import NavbarComp from './components/NavbarComp'
import { BiMoon, BiSun } from 'react-icons/bi'

interface LayoutProp {
    children: React.ReactNode
}

const Layout = ({children}: LayoutProp) => {
    // const { colorMode, toggleColorMode } = useColorMode()

    // const handlebutton = () => {
    //     if(colorMode === 'light'){
    //         toggleColorMode()
    //     }
    // }

  return (
    <>
        <Flex w='full' bg='#EAECEF'>
            {/* <Button
            onClick={toggleColorMode}
            bg={"transparent"}
            p={2}
            rounded={"full"}
            _hover={{ bg: "transparent" }}>
                <Icon as={colorMode === "dark" ? BiMoon : BiSun} />
            </Button> */}
            <Box display={{base:'none', md:'block'}} w={'20%'}> 
                <SideBar/>
            </Box>
           <Flex flexWrap={'wrap'} w={'100%'}>
           <Box  w={{base:'100%',lg:'65%',xl:'69%'}}  mt={4}  >
            {children}
            </Box>
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