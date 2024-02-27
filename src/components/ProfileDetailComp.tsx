
import React, { useEffect, useState } from "react";
// Chakra imports
import { Avatar, Box, Button, Card, Flex, Heading, Icon, Image, Text, useColorModeValue } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineInsertComment } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../stores/types/rootState";
import { AUTH_CHECK } from "../stores/rootReducer";

const ProfileDetailComp:React.FC =() => {
  let boxBg = useColorModeValue("white !important", "#111c44 !important");
  let mainText = useColorModeValue("gray.800", "white");
  let secondaryText = useColorModeValue("gray.400", "gray.400");

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

        const auth = useSelector((state: RootState) => state.auth)
        const dispatch = useDispatch() 

        useEffect(() => {
          const stroreAuthData = localStorage.getItem('authDate')
          if(stroreAuthData) {
            const parseAuthData = JSON.parse(stroreAuthData)
            dispatch(AUTH_CHECK({
              user: parseAuthData
            }))    
          }
        },[dispatch, auth])
  return (
    <>
    <Box mx={2} h={'100vh'}>
    <Card
      mx={1}
      mb={2}
      p='5px'
      h='310px'
      bg={boxBg}>
        <Text
          fontWeight='500'
          my={2}
          mx={4}>
          My Profile
        </Text>
    <Flex
      direction='column'
      alignItems='center'
      mx={2}>
      <Image
        src={auth.image_cover ? auth.image_cover :'https://i.ibb.co/xmP2pS6/Profile.png'}
        // maxW='100%'
        w={'100%'}
        h={'30%'}
        borderRadius='20px'
      />
      <Flex justify='space-between' w='full' p={3} >
        <Image
          src={auth.profile_picture ? auth.profile_picture : 'https://bit.ly/broken-link'}
          border='5px solid red'
          borderColor={boxBg}
          width='68px'
          height='68px'
          mt='-38px'
          borderRadius='50%'
          />
        <NavLink to={'/edit-profile'}>
          <Button 
            boxSize={"fit-content"}
            fontSize={13}
            rounded={15} 
            border='2px' 
            borderColor={"black"}
            bg={"white"}
            mt={1}
            alignItems={"end"}>
            Edit Profile
          </Button>
        </NavLink>
      </Flex>
      <Box mb={2} textAlign={'left'} w={'100%'} >
        <Text textAlign={'left'}  fontWeight='700'>
          {auth.full_name}
        </Text>
        <Text textAlign={'left'}  fontSize='10px' fontWeight={'500'} textColor='GrayText'>
          @{auth.user_name}
        </Text>
        <Text textAlign={'left'}  fontSize='12px'  fontWeight='600'>
          {auth.bio} 
        </Text>
      </Box>
      <Flex gap={2} w='100%' px='20px'>
        <Flex gap={1} >
          <Text
            fontWeight='600'
            textColor='black'
            fontSize='14px'>
            1
          </Text>
          <Text fontSize='14px'  textColor='GrayText' textAlign='center' >
            Following
          </Text>
        </Flex>
        <Flex gap={1}>
          <Text
            fontWeight='400'
            textColor='black'
            fontSize='14px'>
            666
          </Text>
          <Text fontSize='14px'  textColor='GrayText' textAlign='center' >
            Follower
          </Text>
        </Flex>
      </Flex>
    </Flex>
    </Card>

    <Card  p={2} w={'100%'}>
      <Flex gap={4}>
        <Avatar name='gatot' src='https://bit.ly/sage-adebayo'/>
          <Box>
            <Flex alignItems='center' gap={1}>
              <Heading size='m'>Bujang</Heading>
                <Text>@bujang</Text>
                <Icon boxSize={1.5} mt={1} viewBox='0 0 200 200' color='gray.500'>
                  <path
                    fill='currentColor'
                    d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
                  />
                </Icon>
                <Text color='gray'>1h</Text>
            </Flex>

            <NavLink to={'/status'}>
              <Text textAlign={'justify'}>
                PANTEK
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
    </Box>
  </>
  );
}

export default ProfileDetailComp;




