import React from 'react'
import { Avatar, Card, Button, Flex, Heading, Input } from '@chakra-ui/react'
import { LuImagePlus } from "react-icons/lu";
import { HiSpeakerphone } from "react-icons/hi";
import { NavLink } from 'react-router-dom';


const Header: React.FC = () => {

  return (
    <>
      <Card w={'100%'} bg={'transparent'}>
        <Flex justifyContent={'center'}>
          <NavLink to={'/'}>
            <Heading _hover={{color:'black', cursor:'pointer'}} fontSize='30px' color={'#482AE3'} m={2}>
              <HiSpeakerphone />
            </Heading>
          </NavLink>

        </Flex>      
        <Flex gap={1}  p={2}>
            <Avatar name='gatot' src='https://bit.ly/sage-adebayo'/>
            <Input placeholder='What is happening?!' />
            <Button variant={'ghost'} _hover={{bg:'transparent'}} rounded={15} bg='trsansparent'>
              <LuImagePlus size={30} color='#482AE3' />
            </Button>
            <Button _hover={{bg:'#6178D6', color:'black'}} rounded={20} color='white' bg='#482AE3' >
              Post
            </Button>
        </Flex>
      </Card>
    </>
  )
}

export default Header