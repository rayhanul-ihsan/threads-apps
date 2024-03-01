import React from 'react'
import { Avatar,  Button,   Card,   Flex, Heading, Text} from '@chakra-ui/react'
import Suggests from '../hooks/Suggests'

// interface Data  {
//     id : number |undefined
//     name :string | undefined 
//     username :string | undefined
//     image: string | undefined
//     follow?: boolean
//     isFollowing?:boolean
// }
 
const BoxSuggest: React.FC = () => {
    // const [foll, setFoll] = useState<boolean>(false);

    // const handleFollow = () => {
    //     if (!foll){
    //         setFoll(true)
    //     }else{
    //         setFoll(false)
    //     }
    // }

  return (
    <>
        <Card 
            mx={"2"}
            borderRadius='20px'
            w='100%'
            bg={'#E5E5E5'}>
            <Heading fontSize='15px' m={2}>Suggested for you</Heading>
            {/* <Flex gap={1} p={2} justifyContent='space-between' alignItems={"center"}>
                <Flex alignItems={"center"} gap={1}>
                    <Avatar name='gatot' src={image}/>
                    <Flex flexDirection='column'>
                        <Heading size='m'>{name}</Heading>
                        <Text mt={-2} fontSize='10px'  textColor='GrayText'>@{username}</Text>
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
            </Flex> */}
            <Suggests/>
        </Card>
    </>
  )
}

export default BoxSuggest