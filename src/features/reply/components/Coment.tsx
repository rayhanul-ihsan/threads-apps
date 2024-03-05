import React, { useState } from "react";

import {
  Avatar,
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Icon,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";

import { IoArrowBackOutline } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineInsertComment } from "react-icons/md";
import { LuImagePlus } from "react-icons/lu";
import { NavLink } from "react-router-dom";

interface Data {
  id: number;
  name: string;
  username: string;
  jam: string;
  image: string;
  description: string;
  like: number;
  profile: string;
}

const Coment: React.FC<Data> = (props) => {
  const { id, jam, name, username, description, like, profile, image } = props;

  const [likes, setLikes] = useState<number>(0);
  const [liked, setLiked] = useState<boolean>(false);

  const handlelike = () => {
    if (!liked) {
      setLikes(likes + 1);
    } else {
      setLikes(likes - 1);
    }
    setLiked(!liked);
  };
  return (
    <>
      <Card my={1}>
        <Flex p={4} gap={1} mb={-4}>
          <Avatar name="gatot" src="https://bit.ly/sage-adebayo" />
          <Flex flexDirection={"column"}>
            <Flex gap={1}>
              <Heading size="m">{name}</Heading>
              <Text>@{username}</Text>
              <Icon boxSize={1.5} mt={3} viewBox="0 0 200 200" color="GrayText">
                <path
                  fill="currentColor"
                  d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                />
              </Icon>
              <Text color="gray">{jam}</Text>
            </Flex>
            <Text fontSize="14" mt={-4} py={4} textAlign={"justify"}>
              {description}
            </Text>
            <Image src={image} borderRadius={"10px"} w={"50%"} my={2} />
            <Flex mb={2} ml={-4} gap={5}>
              <Button _hover={{ bg: "white" }} bg="white" onClick={handlelike}>
                <AiOutlineHeart size={25} color={liked ? "red" : "gray"} />
                <Text ml={2} color="gray">
                  {likes}
                </Text>
              </Button>
              <Button _hover={{ bg: "white" }} bg="white">
                <MdOutlineInsertComment size={25} color="gray" />
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </>
  );
};

export default Coment;
