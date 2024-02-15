import React from 'react'

import { CgProfile } from "react-icons/cg";
import { TbLogout2 } from "react-icons/tb";
import { NavLink } from 'react-router-dom';
import { LuImagePlus } from 'react-icons/lu';
import { AiOutlineHeart } from "react-icons/ai";
import { BiSolidHomeAlt2 } from "react-icons/bi";
import { RiUserSearchLine } from "react-icons/ri";

import {  Avatar, Box, Button, Card, Flex, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Text, useDisclosure } from '@chakra-ui/react'

const NavbarComp :React.FC = () => {


  return (
    <>
    {/* <Card bg={'white'}> */}

    <Flex display={{base:'blok', md:'none'}} w={'100%'} direction='row' justifyContent={'center'} height='100vh'   >
      <Spacer/>
      <Card flexDirection={'row'} justifyContent={'space-evenly'} flexWrap={'wrap'}>
          <NavLink to={'/'}>
            <Button 
              _hover={{ bg: 'white', color: 'gray'}} 
              bg='white'>
              <BiSolidHomeAlt2 size={25} />
            </Button>
          </NavLink>
          <NavLink to={'/search'}>
            <Button 
              _hover={{ bg: 'white', color: 'gray'}} 
              bg='white'>
              <RiUserSearchLine size={25}/>
            </Button>
          </NavLink>
        <NavLink to={'/follows'}>
          <Button 
            _hover={{ bg: 'white', color: 'gray'}} 
            bg='white'>
            <AiOutlineHeart size={25}  />
          </Button>
        </NavLink>
        <NavLink to={'/follows'}>
          <Button 
            _hover={{ bg: 'white', color: 'gray'}} 
            bg='white'>
            <CgProfile size={25}/>
          </Button>
        </NavLink>
      </Card>
    </Flex>
    {/* </Card> */}
    </>
  )
}

export default NavbarComp