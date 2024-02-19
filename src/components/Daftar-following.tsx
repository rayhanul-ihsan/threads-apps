import { Avatar, Button, Card, Flex, Heading, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

interface Following  {
    id : number
    name :string
    username :string
    avatar :string
    isFollowing:boolean
}

const DaftarFollowing: React.FC<Following> = (props) => {
    const {id, name, username, avatar, isFollowing} = props
    
    // console.log(props)
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
    <Card p={1} my={2} w={"100%"}>
        <Flex gap={1} p={2} justifyContent='space-between' alignItems={"center"}>
            <Flex alignItems={"center"} gap={1}>
                <Avatar name='gatot' src={avatar}/>
                <Flex flexDirection='column'>
                    <Heading size='m'>{name}</Heading>
                    <Text mt={-2} fontSize='10px'  textColor='GrayText'>{username}</Text>
                </Flex>
            </Flex>
            <Button 
                boxSize={"fit-content"}
                fontSize={13}
                rounded={15} 
                border='2px' 
                borderColor={"black"}
                bg={"white"}
                alignItems='center'
                onClick={handleFollow}>
                {isFollowing ? 'Following' : 'Follow'}
            </Button>
        </Flex>
    </Card>

    </>
  )
}

export default DaftarFollowing