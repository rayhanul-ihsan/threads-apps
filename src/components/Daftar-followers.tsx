import {
  Avatar,
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

interface Data {
  id: number | undefined;
  name: string | undefined;
  username: string | undefined;
  image: string | undefined;
  follow?: boolean;
  isFollowing?: boolean;
}

const handleGetUsers = () => {
    
};

const DaftarFollowers: React.FC<Data> = (props) => {
  const { id, name, username, image } = props;

  console.log(props);
  const [foll, setFoll] = useState<boolean>(false);

  const handleFollowers = () => {
    if (!foll) {
      setFoll(true);
    } else {
      setFoll(false);
    }
  };
  return (
    <>
      <Box
        my={2}
        _hover={{ bg: "gray.200" }}
        w={"100%"}
        borderBlock={2}
        borderColor={"black"}
      >
        <Flex
          gap={1}
          p={2}
          justifyContent="space-between"
          alignItems={"center"}
        >
          <Flex alignItems={"center"} gap={1}>
            <Avatar name="gatot" src={image} />
            <Flex flexDirection="column">
              <Heading size="m">{name}</Heading>
              <Text mt={-2} fontSize="12px" textColor="GrayText">
                @{username}
              </Text>
            </Flex>
          </Flex>
          <Button
            boxSize={"fit-content"}
            fontSize={13}
            rounded={15}
            border="2px"
            borderColor={"black"}
            bg={"transparent"}
            alignItems="center"
            onClick={handleFollowers}
          >
            {foll ? "Following" : "Follow"}
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default DaftarFollowers;
