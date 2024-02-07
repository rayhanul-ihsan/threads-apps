import React from 'react'
import { Avatar,  Button,   Card,   Flex, Heading, Text} from '@chakra-ui/react'
 
const Suggest: React.FC = () => {
  return (
    <>
        <Card 
            mx={"auto"}
            borderRadius='20px'
            w={{ base: "345px", md: "350px" }}>
        <Heading fontSize='15px' m={2}>Suggested for you</Heading>
            <Flex gap={1} p={2} justifyContent='space-between' alignItems={"center"}>
                <Flex alignItems={"center"} gap={1}>
                    <Avatar name='gatot' src='https://bit.ly/kent-c-dodds'/>
                    <Flex flexDirection='column'>
                        <Heading size='m'>Santoso</Heading>
                        <Text mt={-2} fontSize='10px'  textColor='GrayText'>@santoso</Text>
                    </Flex>
                </Flex>
                <Button 
                    boxSize={"fit-content"}
                    fontSize={13}
                    rounded={15} 
                    border='2px' 
                    borderColor={"gray"}
                    bg={"white"}
                    alignItems='center'
                    textColor={"gray"}>
                    Following
                </Button>
            </Flex>
            <Flex gap={1} p={2} justifyContent='space-between' alignItems={"center"}>
                <Flex alignItems={"center"} gap={1}>
                    <Avatar name='gatot' src='https://bit.ly/tioluwani-kolawole'/>
                    <Flex flexDirection='column'>
                        <Heading size='m'>Sinta</Heading>
                        <Text mt={-2} fontSize='10px'  textColor='GrayText'>@sinta</Text>
                    </Flex>
                </Flex>
                <Button 
                    boxSize={"fit-content"}
                    fontSize={13}
                    rounded={15} 
                    border='2px' 
                    borderColor={"black"}
                    bg={"white"}
                    alignItems='center'>
                    Follow
                </Button>
            </Flex>
            <Flex gap={1} p={2} justifyContent='space-between' alignItems={"center"}>
                <Flex alignItems={"center"} gap={1}>
                    <Avatar name='gatot' src='https://bit.ly/prosper-baba'/>
                    <Flex flexDirection='column'>
                        <Heading size='m'>Pablo</Heading>
                        <Text mt={-2} fontSize='10px'  textColor='GrayText'>@pablo</Text>
                    </Flex>
                </Flex>
                <Button 
                    boxSize={"fit-content"}
                    fontSize={13}
                    rounded={15} 
                    border='2px' 
                    borderColor={"black"}
                    bg={"white"}
                    alignItems='center'>
                    Follow
                </Button>
            </Flex>
            <Flex gap={1} p={2} justifyContent='space-between' alignItems={"center"}>
                <Flex alignItems={"center"} gap={1}>
                    <Avatar name='gatot' src='https://bit.ly/code-beast'/>
                    <Flex flexDirection='column'>
                        <Heading size='m'>Ahmad</Heading>
                        <Text mt={-2} fontSize='10px'  textColor='GrayText'>@ahmad</Text>
                    </Flex>
                </Flex>
                <Button 
                    boxSize={"fit-content"}
                    fontSize={13}
                    rounded={15} 
                    border='2px' 
                    borderColor={"black"}
                    bg={"white"}
                    alignItems='center'>
                    Follow
                </Button>
            </Flex>
        </Card>
    </>
  )
}

export default Suggest