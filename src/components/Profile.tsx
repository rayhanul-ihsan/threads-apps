
import React from "react";
// Chakra imports
import { Button, Card, Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";

const Profile:React.FC =() => {
  let boxBg = useColorModeValue("white !important", "#111c44 !important");
  let mainText = useColorModeValue("gray.800", "white");
  let secondaryText = useColorModeValue("gray.400", "gray.400");

  return (
    <Card
      mx={"auto"}
      my={2} 
      borderRadius='20px'
      bg={boxBg}
      p='5px'
      h='310px'
      w={{ base: "345px", md: "350px" }}>

        <Text
          fontWeight='500'
          my={2}
          mx={4}>
          My Profile
        </Text>
    <Flex
      direction='column'
      alignItems='center'>
      <Image
        src='https://i.ibb.co/xmP2pS6/Profile.png'
        maxW='100%'
        borderRadius='20px'
      />
      <Flex justify='space-between' w='full' p={3} >
        <Image
          src='https://bit.ly/ryan-florence'
          border='5px solid red'
          borderColor={boxBg}
          width='68px'
          height='68px'
          mt='-38px'
          borderRadius='50%'
        />
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
      </Flex>
      <Flex flexDirection='column' >
        <Text fontWeight='600'>
          Padli parkoso
        </Text>
        <Text fontSize='9px'  textColor='GrayText'>
          @padliparkoso
        </Text>
        <Text fontSize='12px'  fontWeight='450'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        </Text>
      </Flex>
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




