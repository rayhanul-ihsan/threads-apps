import React, { useEffect, useState } from 'react'
import { Avatar,  Box,  Button,   Card,   Flex, Heading, Text} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../stores/types/rootState';
import { fetchUsers } from '../../../stores/slices/suggestSlice';

interface Data  {
    id : number |undefined
    name :string | undefined  
    username :string | undefined
    image: string | undefined
    follow?: boolean
    isFollowing?:boolean
}
 
const SuggestComp: React.FC<Data> = (props) => {
    console.log(props)
    const { name, username, image, follow, isFollowing} = props
    const [foll, setFoll] = useState<boolean>(false);

    const handleFollow = () => {
        if (!foll){
            setFoll(true)
        }else{
            setFoll(false)
        }
    }

  return (
    <>
        <Box 
            // mx={2}
            // my={2}
            borderRadius='20px'
            _hover={{bg:'#EAECEF'}}
            w='100%'
            bg={'transparent'}>
            <Flex gap={1} p={2}  justifyContent='space-between' alignItems={"center"}>
                <Flex alignItems={"center"} gap={1}>
                    <Avatar name='gatot' src={image}/>
                    <Flex flexDirection='column'>
                        <Heading size='m'>{name}</Heading>
                        <Text mt={-2} fontSize='12px'  textColor='GrayText'>@{username}</Text>
                    </Flex>
                </Flex>
                <Button 
                    boxSize={"fit-content"}
                    fontSize={13}
                    rounded={15} 
                    border='2px' 
                    borderColor={"black"}
                    bg={"transparent"}
                    alignItems='center'
                    textColor={"black"}
                    onClick={handleFollow}>
                    {foll ? 'Following' : 'Follow'}
                </Button>
            </Flex>
        </Box>
    </>
  )
}

export default SuggestComp