import { Avatar, Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IFollow } from "../../../interface/user";

export default function FollowCard(props: IFollow) {
  // console.log("props", props);
  const [foll, setFoll] = useState<boolean>(false);
  const [followed, setFollowed] = useState<boolean>(false);
  useEffect(() => {
    
    if (followed) {
      setFoll(true);
    } else {
      setFoll(false);
    }
  })
 
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
            <Avatar name="gatot" src={props.profile_picture} />
            <Flex flexDirection="column">
              <Heading size="m">{props.full_name}</Heading>
              <Text mt={-2} fontSize="12px" textColor="GrayText">
                @{props.user_name}
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
            {foll ? "unfollow" : "Follow"}
          </Button>
        </Flex>
      </Box>
    </>
  );
}
