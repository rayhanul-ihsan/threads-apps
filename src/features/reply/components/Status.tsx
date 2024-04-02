import { useEffect, useState } from "react";

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
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { IoArrowBackOutline } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineInsertComment } from "react-icons/md";
import { LuImagePlus } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { useReply } from "../hooks/useReply";
import { useAppSelector } from "../../../stores/types/rootState";
import PostReply from "../hooks/PostReply";
import Coment from "./Coment";

interface Id {
  id: number;
}
const Status = (props: Id) => {
  const { id } = props;
  const { getThread } = useReply();
  useEffect(() => {
    getThread(id);
  }, []);
  const status = useAppSelector((state) => state.reply.threads);
  console.log("status:", status);

  // auth
  const auth = useAppSelector((state) => state.auth);
  // auth

  // postreply
  const { handleChange, handleSubmit, handleChangeFile } = PostReply();
  // postreply

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
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <Card bg={"transparent "} _hover={{ bg: "#E5E5E5" }}>
          <NavLink to={"/"}>
            <Flex p={4} gap={2} mb={-4}>
              <IoArrowBackOutline size={25} />
              <Heading fontSize="23px">Status</Heading>
            </Flex>
          </NavLink>
          <Flex p={4} gap={2}>
            <Avatar name="gatot" src={status.author.profile_picture} />
            <Flex flexDirection="column" marginTop={-4}>
              <Flex py={4} gap={1} >
                <Flex flexDirection="column">
                  <Heading mb={-2} size="m">
                    {status.author.full_name}
                  </Heading>
                  <Text my={2}>@{status.author.user_name}</Text>
                </Flex>
              </Flex>
              <Text fontSize="" mt={-4}  textAlign={"justify"}>
                {status.content}
              </Text>
              <Image
                src={status.image}
                alt="image"
                borderRadius={"10px"}
                w={"50%"}
                my={2}
              />
              <Flex mt={-6} mb={-4}>
                <Text fontSize="14px" p={4}>
                  {status.createdAt}
                  <Icon boxSize={1.5} viewBox="0 0 200 200" color="gray.500">
                    <path
                      fill="currentColor"
                      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                    />
                  </Icon>
                  Jul26, 2023
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex gap={5} mx={4}>
            <Button
              _hover={{ bg: "#EAECEF" }}
              bg="transparent"
              onClick={handlelike}
            >
              <AiOutlineHeart size={25} color={liked ? "red" : "gray"} />
              <Text ml={2} color="gray">
                {likes}
              </Text>
            </Button>
            <Button _hover={{ bg: "#EAECEF" }} bg="transparent">
              <MdOutlineInsertComment size={25} color="gray" />
              <Text ml={2} color="gray">
                {status.reply}
              </Text>
            </Button>
          </Flex>
          <Box>
            <Flex gap={1} p={2}>
              <Avatar
                name="gatot"
                src={
                  auth.profile_picture
                    ? auth.profile_picture
                    : "https://i.ibb.co/xmP2pS6/Profile.png"
                }
              />
              <Input
                placeholder="Type your reply!"
                name="content"
                onChange={handleChange}
              />
              <Flex ml={2}>
                <InputGroup>
                  <InputLeftElement pointerEvents={"none"}>
                    <LuImagePlus size={30} color="#482AE3" />
                  </InputLeftElement>
                  <Input
                    cursor={"pointer"}
                    w={"2px"}
                    type="file"
                    opacity={0}
                    name="image"
                    onChange={handleChangeFile}
                  />
                </InputGroup>
                <Button
                  _hover={{ bg: "#6178D6", color: "black" }}
                  rounded={20}
                  color="white"
                  bg="#482AE3"
                  type="submit"
                >
                  Reply
                </Button>
              </Flex>
            </Flex>
          </Box>
        </Card>
      </form>
      {status.replies.map((reply) => (
        <Coment
          key={reply.id}
          id={reply.id}
          name={reply.author.full_name}
          username={reply.author.user_name}
          image={reply.image}
          jam={reply.createdAt}
          description={reply.content}
          reply={reply.reply}
          like={reply.likes}
          profile={reply.author.profile_picture}
        />
      ))}
    </>
  );
};

export default Status;
