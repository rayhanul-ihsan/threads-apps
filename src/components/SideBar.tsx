import React from 'react'

import {  Box, Button, Flex, Heading, Spacer, Text } from '@chakra-ui/react'


import { BiSolidHomeAlt2 } from "react-icons/bi";
import { RiUserSearchLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { TbLogout2 } from "react-icons/tb";
import { NavLink } from 'react-router-dom';

const SideBar :React.FC = () => {
  

  return (
    <>
    <Flex  direction='column'  height='100vh' mr={2} position={'fixed'} >
      <Box >
        <Heading color='#482AE3' ml={4} p={4}>Toa</Heading>
          <NavLink to={'/'}>
            <Flex pl={4} >
                <Button bg='#EAECEF'><BiSolidHomeAlt2 size={25} /></Button>
                <Text _hover={{ color: 'gray'}} fontWeight='600' alignItems='center' mt={2}>Home</Text>
            </Flex>
          </NavLink>
          <NavLink to={'/search'}>
            <Flex pl={4} >
              <Button bg='#EAECEF'><RiUserSearchLine size={25}/></Button>
              <Text _hover={{ color: 'gray'}} fontWeight='600' alignItems='center' mt={2}>Search</Text>
            </Flex>
          </NavLink>
        <NavLink to={'/follows'}>
          <Flex pl={4}>
            <Button  bg='#EAECEF'><AiOutlineHeart size={25}  /></Button>
            <Text _hover={{ color: 'gray'}} fontWeight='600' alignItems='center' mt={2}>Follows</Text>
          </Flex>
        </NavLink>
        <Flex pl={4} >
          <Button bg='#EAECEF'><CgProfile size={25}/></Button>
          <Text _hover={{ color: 'gray'}} fontWeight='600' alignItems='center' mt={2}>Profile</Text>
        </Flex>
          <Button  mt={2} ml={6} rounded={15} color={'white'} bg='#482AE3'>Creat Post</Button>
      </Box>

        <Spacer/>
        <NavLink to={"/login"}>
          <Flex pl={4} >
            <Button _hover={{ bg: '#EAECEF', color: 'gray'}} bg='#EAECEF'><TbLogout2 /></Button>
            <Text _hover={{color: 'gray'}} fontWeight='600' alignItems='center' mt={2}>Login</Text>
          </Flex>
        </NavLink>
    </Flex>
    </>
  )
}

export default SideBar