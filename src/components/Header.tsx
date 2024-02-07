import React from 'react'
import { Avatar,  Button,   Flex, Heading, Input } from '@chakra-ui/react'
import { LuImagePlus } from "react-icons/lu";
import { HiSpeakerphone } from "react-icons/hi";


const Header: React.FC = () => {

  return (
    <>
      <Flex justifyContent={'center'}>
        <Heading fontSize='30px' color={'#482AE3'} m={2}><HiSpeakerphone /></Heading>
      </Flex>      
      <Flex gap={1}  p={2}>
          <Avatar name='gatot' src='https://bit.ly/sage-adebayo'/>
          <Input placeholder='What is happening?!' />
          <Button rounded={15} bg='#EAECEF'><LuImagePlus size={30} color='#482AE3' /></Button>
          <Button rounded={20} color='white' bg='#482AE3' >Post</Button>
      </Flex>
    </>
  )
}

export default Header