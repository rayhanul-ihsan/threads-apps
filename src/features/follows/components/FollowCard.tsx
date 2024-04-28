import { Avatar, Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IFollow } from "../../../interface/user";
import { useFollow } from "../hooks/useFollow";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../stores/types/rootState";
import { fetchFollow } from "../../../stores/slices/followSlice";
  
export default function FollowCard(props: IFollow) {
  const auth = useAppSelector((state) => state.auth.id);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFollow());
  }, [auth]);

  const istrue = props.following!.some((item) => item.id === props.id);
  const [foll, setFoll] = useState<boolean>(istrue);
  // const [showAlert, setShowAlert] = useState(false);
  const { handleFollow, handleUnfollow } = useFollow();

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
              <Text fontSize="14px" textColor="GrayText">
                @{props.user_name}
              </Text>
            </Flex>
          </Flex>

          <Button
            _before={
              foll
                ? {
                    content: '"Following"',
                  }
                : {
                    content: '"Follow"',
                  }
            }
            _hover={
              foll
                ? {
                    bg: "transparent",
                    color: "red",
                    border: "2px solid red",
                    _before: {
                      content: '"Unfollow"',
                    },
                  }
                : { bg: "#6178D6", color: "white" }
            }
            rounded={20}
            color={foll ? "black" : "black"}
            bg={foll ? "transparent" : "white"}
            boxSize={"fit-content"}
            border={foll ? "2px" : "2px solid #6178D6"}
            borderColor={foll ? "black" : "white"}
            fontSize={16}
            py={2}
            mt={-1}
            alignItems="center"
            onClick={() => {
              foll
                ? (handleUnfollow(props.id!), setFoll((prev) => !prev))
                : (handleFollow(props.id!), setFoll((prev) => !prev));
            }}
          >
          </Button>
        </Flex>
      </Box>
    </>
  );
}
