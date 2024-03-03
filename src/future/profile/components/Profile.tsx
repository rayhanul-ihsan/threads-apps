
import React, { useEffect } from "react";
import { Box, Button, Card, Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../stores/types/rootState";
import { AUTH_CHECK } from "../../../stores/rootReducer";

const Profile:React.FC =() => {
  let boxBg = useColorModeValue("white !important", "#111c44 !important");
  // let mainText = useColorModeValue("gray.800", "white");
  // let secondaryText = useColorModeValue("gray.400", "gray.400");

  const auth = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch() 

  // const []

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
    <Card
      mx={"2"}
      my={2} 
      borderRadius='15px'
      bg={'#E5E5E5'}
      // p='5px'
      h='300px'
      w='100%'>

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
        <NavLink to={'/detail-profile'}>
          <Button 
            boxSize={"fit-content"}
            fontSize={13}
            rounded={15} 
            border='2px' 
            borderColor={"black"}
            bg={"transparent"}
            mt={1}
            alignItems={"end"}>
            Edit Profile
          </Button>
        </NavLink>
      </Flex>
      <Box mb={4} textAlign={'left'} w={'100%'} >
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
  );
}

export default Profile;




