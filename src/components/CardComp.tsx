import { Avatar, Box, Button, Card,  Flex, Heading, Text, Icon, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Input, ModalFooter } from '@chakra-ui/react'
import React, { useState } from 'react'
import { MdOutlineInsertComment } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import { LuImagePlus } from 'react-icons/lu';



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

    const { isOpen, onOpen, onClose  } = useDisclosure()


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
        <Card mt={2} p={2} w={'100%'}>
            <Flex gap={4}>
                <Avatar name='gatot' src='https://bit.ly/sage-adebayo'/>
                <Box>
                <Flex alignItems='center' gap={1}>
                    <Heading size='m'>{name}</Heading>
                    <Text>{username}</Text>
                    <Icon boxSize={1.5} mt={1} viewBox='0 0 200 200' color='gray.500'>
                    <path
                        fill='currentColor'
                        d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
                        />
                    </Icon>
                    <Text color='gray'>{jam}</Text>
                </Flex>
                <NavLink to={'/status'}>
                    <Text textAlign={'justify'}>
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
                    {/* <NavLink to={'/reply'}>
                    </NavLink> */}
                    <Button onClick={onOpen} bg='white'>
                        <MdOutlineInsertComment size={25} color='gray'/>
                    </Button>
                </Flex>
                </Box>
            </Flex>
        </Card>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody my={2}>
            <Flex>
            <Avatar name='gatot' src='https://bit.ly/sage-adebayo'/>
            <Input variant='flushed' placeholder='What is happening?!' />
            </Flex>    
          </ModalBody>

          <ModalFooter justifyContent={'space-between'}>
                <Button _hover={{bg:'white'}} rounded={15} bg='#ffff'>
                <LuImagePlus size={30} color='#482AE3' />
                </Button>
                <Button _hover={{bg:'#6178D6', color:'black'}} rounded={20} color='white' bg='#482AE3' >
                Post
                </Button> 
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CardComp