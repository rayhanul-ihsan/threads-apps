import { Avatar, Box, Button, Card,  Flex, Heading, Text, Icon } from '@chakra-ui/react'
import React, { useState } from 'react'
import { MdOutlineInsertComment } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import SideBar from './SideBar';



interface Data  {
    id : number
    name :string 
    username :string
    jam:string
    description :string
    like: number
}

const CardComp : React.FC<Data> = (props) => {
    const {id, name, username, description, like, jam} = props

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
        <Card mt={2} p={2}>
            <Flex gap={4}>
                <Avatar name='gatot' src='https://bit.ly/sage-adebayo'/>
                <Box>
                <Flex alignItems='center' gap={1}>
                    <Heading size='m'>{name}</Heading>
                    <Text>{username}</Text>
                    <Icon boxSize={2.5} mt={1} viewBox='0 0 200 200' color='gray.500'>
                    <path
                        fill='currentColor'
                        d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
                        />
                    </Icon>
                    <Text color='gray'>{jam}</Text>
                </Flex>
                <NavLink to={'/status'}>
                    <Text>
                        {description}
                    </Text>
                </NavLink>
                <Flex gap={5}>
                    <Button bg='white' onClick={handlelike} >
                        <AiOutlineHeart size={25} color={liked ? 'red' : 'gray' }/>
                        <Text ml={2} color='gray'>
                            {likes}
                        </Text>
                    </Button>
                    <Button bg='white'>
                        <MdOutlineInsertComment size={25} color='gray'/>
                    </Button>
                </Flex>
                </Box>
            </Flex>
        </Card>
    </>
  )
}

export default CardComp