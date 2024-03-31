import React from "react";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { IFollow } from "../../../interface/user";

export default function SuggestComp(props: IFollow){
  const [foll, setFoll] = React.useState<boolean>(false);
  
  const handleFollow = () => {
    if (!foll) {
      setFoll(true);
    } else {
      setFoll(false);
    }
  };

  return ( 
    <>
      <Box
        borderRadius="20px"
        _hover={{ bg: "#EAECEF" }}
        w="100%"
        bg={"transparent"}
      >
        <Flex
          gap={1}
          p={2}
          justifyContent="space-between"
          alignItems={"center"}
        >
          <NavLink to={`/detail-profile/${props.id}`}>
            <Flex alignItems={"center"} gap={1}>
              <Avatar name="avatar" src={props.profile_picture} />
              <Flex flexDirection="column">
                <Heading size="m">{props.full_name}</Heading>
                <Text mt={-2} fontSize="12px" textColor="GrayText">
                  @{props.user_name}
                </Text>
              </Flex>
            </Flex>
          </NavLink>
          <Button
            boxSize={"fit-content"}
            fontSize={13}
            rounded={15}
            border="2px"
            borderColor={"black"}
            bg={"transparent"}
            alignItems="center"
            textColor={"black"}
            onClick={handleFollow}
          >
            {foll ? "Following" : "Follow"}
          </Button>
        </Flex>
      </Box>
    </>
  );
};


