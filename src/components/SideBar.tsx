import React from 'react'

import { CgProfile } from "react-icons/cg";
import { TbLogout2 } from "react-icons/tb";
import { NavLink } from 'react-router-dom';
import { LuImagePlus } from 'react-icons/lu';
import { AiOutlineHeart } from "react-icons/ai";
import { BiSolidHomeAlt2 } from "react-icons/bi";
import { RiUserSearchLine } from "react-icons/ri";

import {  Avatar, Box, Button, Flex, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Text, useDisclosure } from '@chakra-ui/react'

const SideBar :React.FC = () => {
  const { isOpen, onOpen, onClose  } = useDisclosure()


  return (
    <>
    <Flex  direction='column' height='100vh' mr={2} position={'fixed'} >
      <Box>
        <NavLink to={'/'}>
          <Heading _hover={{color:'#6178D6'}} color='#482AE3'  ml={4} p={4}>Toa</Heading>
        </NavLink>
          <NavLink to={'/'}>
            <Flex pl={4} >
                <Button _hover={{ bg: 'EAECEF', color: 'gray'}} bg='#EAECEF'><BiSolidHomeAlt2 size={25} /></Button>
                <Text _hover={{ color: 'gray'}} fontWeight='600' alignItems='center' mt={2}>Home</Text>
            </Flex>
          </NavLink>
          <NavLink to={'/search'}>
            <Flex pl={4} >
              <Button _hover={{ bg: 'EAECEF', color: 'gray'}} bg='#EAECEF'><RiUserSearchLine size={25}/></Button>
              <Text _hover={{ color: 'gray'}} fontWeight='600' alignItems='center' mt={2}>Search</Text>
            </Flex>
          </NavLink>
        <NavLink to={'/follows'}>
          <Flex pl={4}>
            <Button _hover={{ bg: 'EAECEF', color: 'gray'}} bg='#EAECEF'><AiOutlineHeart size={25}  /></Button>
            <Text _hover={{ color: 'gray'}} fontWeight='600' alignItems='center' mt={2}>Follows</Text>
          </Flex>
        </NavLink>
        <Flex pl={4} >
          <Button _hover={{ bg: 'EAECEF', color: 'gray'}} bg='#EAECEF'><CgProfile size={25}/></Button>
          <Text _hover={{ color: 'gray'}} fontWeight='600' alignItems='center' mt={2}>Profile</Text>
        </Flex>
          <Button onClick={onOpen} _hover={{bg:'#6178D6', color:'black'}} mt={2} mx={2} w={'200px'} rounded={15} color={'white'} bg='#482AE3'>Creat Post</Button>
      </Box>

        <Spacer/>
        <NavLink to={"/login"}>
          <Flex pl={4} >
            <Button _hover={{ bg: '#EAECEF', color: 'gray'}} bg='#EAECEF'><TbLogout2 /></Button>
            <Text _hover={{color: 'gray'}} fontWeight='600' alignItems='center' mt={2}>Login</Text>
          </Flex>
        </NavLink>
    </Flex>
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader _ color={'purle'}>Drafts</ModalHeader>
          <ModalBody my={2}>
            <Flex>
            <Avatar name='gatot' src='https://bit.ly/sage-adebayo'/>
            <Input variant='flushed' placeholder='What is happening?!' />
            </Flex>    
          </ModalBody>

          <ModalFooter justifyContent={'space-between'}>
                <Button _hover={{bg:'white'}} rounded={15} bg='#ffff'>
                <LuImagePlus size={30} color='#482AE3' />
                </Button>
                <Button _hover={{bg:'#6178D6', color:'black'}} rounded={20} color='white' bg='#482AE3' >
                Post
                </Button> 
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default SideBar