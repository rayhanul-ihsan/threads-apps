import React from 'react'

import { Button, Card, Center, Flex, Heading, Icon, Input, InputGroup, InputRightElement, Text, useColorMode } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import UseRegister from '../hooks/UseRegister'
import { BiMoon, BiSun } from 'react-icons/bi'


const RegisterPage: React.FC = () => {
    const [show, setShow] = React.useState(false)

    const handleClick = () => setShow(!show)

    const {handleChange, handleRegister} = UseRegister()

    const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
        <Center w={{base:'100%',lg:'100%',xl:'100%'}} h={'100vh'}  bg='gray-600' alignItems={"center"}>
            <Card display={'flex'} alignContent={'center'} p={4} alignItems={"center"}>
                <Heading>
                    Toa
                </Heading>
                <Text>
                    Create account Toa
                </Text>
                <Button
                    onClick={toggleColorMode}
                    bg={"transparent"}
                    p={2}
                    rounded={"full"}
                    _hover={{ bg: "transparent" }}
                >
                    <Icon as={colorMode === "dark" ? BiMoon : BiSun} />
                </Button>
                <Flex flexDirection={'column'} my={2}>
                    <Input my={1} placeholder='Full_Name*' name='full_name' borderColor={'black'} onChange={handleChange} />
                    <Input my={1} placeholder='user_name*' name='user_name' borderColor={'black'} onChange={handleChange} />
                    <Input my={1} placeholder='Email*' name='email' borderColor={'black'} onChange={handleChange} />
                    <InputGroup my={1} size='md' borderColor={'black'} onChange={handleChange}>
                        <Input
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='Password*'
                            name='password'
                            onChange={handleChange}
                            />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                            {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </Flex>
                <Button onClick={handleRegister} _hover={{bg:'#6178D6', color:'black'}} mb={1} rounded={20} bg={'#482AE3'} color={'white'} w={'full'}>
                    Submit
                </Button>
                <Flex mb={1}>
                    <Text fontSize='10px'  textColor='GrayText'>
                        Already have account?
                    </Text>
                    <NavLink to={'/login'}>
                        <Text fontSize='10px' color={'#482AE3'} _hover={{color: 'green', cursor: 'pointer'}}>
                            Login
                        </Text>
                    </NavLink>
                </Flex>
            </Card>
        </Center>
    </>
  )
}

export default RegisterPage