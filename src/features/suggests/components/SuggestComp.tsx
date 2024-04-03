import React, { useEffect } from "react";
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
import { useFollow } from "../../follows/hooks/useFollow";
import { useAppDispatch, useAppSelector } from "../../../stores/types/rootState";
import { fetchFollow } from "../../../stores/slices/followSlice";

export default function SuggestComp(props: IFollow){
  
  const istrue = props.following!.some((item) => item.id === props.id);
  const [foll, setFoll] = React.useState<boolean>(istrue);  
  const { handleFollow, handleUnfollow } = useFollow();
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth.id);
  useEffect(() => {
    dispatch(fetchFollow());
  }, [auth]);

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
            onClick={() => {
              foll ? (handleUnfollow(props.id!), setFoll((prev) => !prev)) : (handleFollow(props.id!), setFoll((prev) => !prev));
            }}
          >
            {foll ? "unfollow" : "Follow"}
          </Button>
        </Flex>
      </Box>
    </>
  );
};


