import { Button, Card, Center, Container, Flex, Heading, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const LoginPage: React.FC = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
  return (
    <>
        <Center w={{base:'100%',lg:'100%',xl:'100%'}} bg='#EAECEF' alignItems={"center"}>
            <Card m={200} p={4} alignItems={"center"}>
                <Heading>
                    Circle
                </Heading>
                <Text fontWeight={'700'}>
                    Login to Circle
                </Text>
                <Flex flexDirection={'column'} my={2}>
                    <Input my={1} placeholder='Email/Username*'borderColor={'black'} />
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
                    <NavLink to={'/login'} >
                        <Text textAlign={'right'} fontSize='10px' color={'#482AE3'} _hover={{color: 'green', cursor: 'pointer'}}>
                            Forget password?
                        </Text>
                    </NavLink>
                </Flex>
                <Button mb={1} rounded={20} bg={'#482AE3'} color={'white'} w={'full'}>
                    Login
                </Button>
                <Flex mb={1}>
                    <Text fontWeight={'600'} fontSize='10px'  textColor='GrayText'>
                        Don't have an account?
                    </Text>
                    <NavLink to={'/register'}>
                        <Text fontWeight={'600'} fontSize='10px' color={'#482AE3'} _hover={{color: 'green', cursor: 'pointer'}}>
                            Create Account
                        </Text>
                    </NavLink>
                </Flex>
            </Card>
        </Center>
       
    </>
  )
}

export default LoginPage