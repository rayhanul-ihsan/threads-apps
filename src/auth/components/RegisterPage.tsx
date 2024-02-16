import React from 'react'

import { Button, Card, Center, Flex, Heading, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import UseRegister from '../hooks/UseRegister'


const RegisterPage: React.FC = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const {handleChange, handleRegister} = UseRegister()
  return (
    <>
        <Center w={{base:'100%',lg:'100%',xl:'100%'}} h={'100vh'}  bg='black' alignItems={"center"}>
            <Card display={'flex'} p={4} alignItems={"center"} bg={'white'}>
                <Heading>
                    Toa
                </Heading>
                <Text>
                    Create account Toa
                </Text>
                <Flex flexDirection={'column'} my={2}>
                    <Input my={1} placeholder='Full Name*'borderColor={'black'} onChange={handleChange} />
                    <Input my={1} placeholder='Email*'borderColor={'black'} onChange={handleChange} />
                    <InputGroup my={1} size='md' borderColor={'black'} onChange={handleChange}>
                        <Input
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='Password*'
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
                    Login
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