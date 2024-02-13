import React, { useState } from 'react'

import { Avatar, Box, Button, Card, Flex, Heading, Icon, Input, Text } from '@chakra-ui/react'
import { IoArrowBackOutline } from "react-icons/io5";
import { AiOutlineHeart } from 'react-icons/ai';
import { MdOutlineInsertComment } from 'react-icons/md';
import { LuImagePlus } from 'react-icons/lu';
import { NavLink } from 'react-router-dom';

const Status: React.FC = () => {
  const [likes, setLikes] = useState<number>(0);
  const [liked, setLiked] = useState<boolean>(false);

  const handlelike = () => {
    if (!liked) {
        setLikes(likes + 1)
    } else{
        setLikes(likes - 1)
    }
      setLiked(!liked)
    }
  return (
    <>
        <Card>
            <NavLink to={'/'}>
              <Flex p={4} gap={2} mb={-4}>
                  <IoArrowBackOutline size={25} />
                  <Heading fontSize='23px'>Status</Heading>
              </Flex>
            </NavLink>
                <Flex p={4} gap={1} mb={-4}>
                  <Avatar name='gatot' src='https://bit.ly/sage-adebayo'/>
                  <Flex flexDirection='column'>
                    <Heading mb={-2} size='m'>Beni Horas Situmorang</Heading>
                    <Text>@beni</Text>
                  </Flex>
                </Flex>
                <Text fontSize="" mt={-4} p={4} textAlign={"justify"}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime vero adipisci ex aliquid est earum,
                  alias commodi quas quidem nisi temporibus molestiae corporis perferendis, reiciendis natus inventore eius labore quisquam.
                </Text>
                <Flex mt={-6} mb={-4}>
                  <Text fontSize='14px' p={4}>00.00AM
                  <Icon boxSize={1.5} viewBox='0 0 200 200' color='gray.500'>
                    <path
                        fill='currentColor'
                        d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
                        />
                    </Icon>
                     Jul26, 2023</Text>
                </Flex>
                <Flex gap={5}>
                    <Button _hover={{bg: 'white'}} bg='white' onClick={handlelike} ><AiOutlineHeart size={25} color={liked ? 'red' : 'gray' }/>
                      <Text ml={2} color='gray'>
                          {likes}
                      </Text>
                    </Button>
                    <Button _hover={{bg: 'white'}} bg='white'><MdOutlineInsertComment size={25} color='gray'/></Button>
                </Flex>
                <Box>
                  <Flex gap={1}  p={2}>
                      <Avatar name='gatot' src='https://bit.ly/sage-adebayo'/>
                      <Input placeholder='Type your reply!' />
                      <Button _hover={{bg: 'white'}} rounded={15} bg='white'><LuImagePlus size={30} color='#482AE3' /></Button>
                      <Button _hover={{bg:'#6178D6', color:'black'}} rounded={20} color='white' bg='#482AE3' >Reply</Button>
                  </Flex>
                </Box>
        </Card>
    </>
  )
}

export default Status