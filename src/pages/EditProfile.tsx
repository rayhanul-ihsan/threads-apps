import { Button, Card, Center, Flex, Heading, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const EditProfile: React.FC = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
  return (
    <>
      <Center w={{base:'100%',lg:'100%',xl:'100%'}} bg='black' h={'100vh'} alignItems={"center"}>
            <Card display={'flex'}  alignContent={'center'} p={6} alignItems={"center"}>
                <Heading>
                    Edit Profile
                </Heading>
                {/* <Text fontWeight={'700'}>
                    Edit Profile
                </Text> */}
                <Flex flexDirection={'column'} my={2}>
                    <Input my={1} placeholder='Full Name'borderColor={'black'} />
                    <Input my={1} placeholder='Username'borderColor={'black'} />
                    <Input my={1} placeholder='Bio'borderColor={'black'} />
                    {/* <InputGroup my={1} size='md' borderColor={'black'}>
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
                    </InputGroup> */}
                    {/* <NavLink to={'/login'} >
                        <Text fontWeight={'500'} textAlign={'right'} fontSize='10px' color={'#482AE3'} _hover={{color: 'red', cursor: 'pointer'}}>
                            Forget password?
                        </Text>
                    </NavLink> */}
                </Flex>
                <Flex justifyContent={'space-around'} w={'full'}>
                    <Button _hover={{bg:'#6178D6', color:'black'}} mb={1} rounded={10} bg={'#482AE3'} color={'white'}>
                        Submit
                    </Button>
                    <NavLink to={'/detail-profile'}>
                    <Button _hover={{bg:'#6178D6', color:'black'}} mb={1} rounded={10} bg={'#482AE3'} color={'white'}>
                        Cancel
                    </Button>
                    </NavLink>
                </Flex>
                {/* <Flex mb={1}>
                    <Text fontWeight={'600'} fontSize='10px'  textColor='GrayText'>
                        Don't have an account?
                    </Text>
                    <NavLink to={'/register'}>
                        <Text fontWeight={'600'} fontSize='10px' color={'#482AE3'} _hover={{color: 'red', cursor: 'pointer'}}>
                            Create Account
                        </Text>
                    </NavLink>
                </Flex> */}
            </Card>
        </Center>  
    </>
  )
}

export default EditProfile

