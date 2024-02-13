import { Box, Flex, Text, Image} from '@chakra-ui/react'

import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

import logo from '../assets/logo.png'

import React from 'react'

const Footer = () => {
  return (
    <div>
        <Box w='100%' borderRadius='20px' mx={"2"} mt={2} p={3}>
            <Flex gap={2}>
                <Text>
                    Developed by San · 
                </Text>
                <Flex mt={1} gap={2}>
                    <FaGithub />
                    <FaLinkedin />
                    <FaInstagram />
                </Flex>
            </Flex>
            <Flex flexDirection='row' gap={1}>
                <Text fontSize='10px'  textColor='GrayText'>
                    Powered by
                </Text>
                <Image
                    width='15px'
                    height='15px'
                    src={logo} 
                    alt="logo" />
                <Text fontSize='10px'  textColor='GrayText'>
                    DumbWays Indonesia · #1Coding Bootcamp
                </Text>
            </Flex>
        </Box>
    </div>
  )
}

export default Footer