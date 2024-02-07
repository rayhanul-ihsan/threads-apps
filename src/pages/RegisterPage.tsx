import React from 'react'

import { Button, Card, Center, Flex, Heading, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'


const RegisterPage: React.FC = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
  return (
    <>
        <Center w={{base:'100%',lg:'100%',xl:'100%'}}  bg='#EAECEF' alignItems={"center"}>
            <Card m={130} p={4} alignItems={"center"} bg={'transparent'}>
                <Heading>
                    Circle
                </Heading>
                <Text>
                    Create account Circle
                </Text>
                <Flex flexDirection={'column'} my={2}>
                    <Input my={1} placeholder='Full Name*'borderColor={'black'} />
                    <Input my={1} placeholder='Email*'borderColor={'black'} />
                    <InputGroup my={1} size='md' borderColor={'black'}>
                        <Input
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='Password*'
                            />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                            {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </Flex>
                <Button mb={1} rounded={20} bg={'#482AE3'} color={'white'} w={'full'}>
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