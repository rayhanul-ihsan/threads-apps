import React, { useState } from "react";

import {
  Avatar,
  Button,
  Card,
  Flex,
  Heading,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";

import { AiOutlineHeart } from "react-icons/ai";
import { CgMenuRound } from "react-icons/cg";
import { MdOutlineInsertComment } from "react-icons/md";
import { API } from "../../../libs/api";
import { timeAgo } from "../../../mocks/ConvertDate";
import { fetchReplyThread } from "../../../stores/slices/replySlice";
import {
  useAppDispatch
} from "../../../stores/types/rootState";


interface Data {
  id: number;
  name: string;
  username: string;
  jam: string;
  image: string;
  description: string;
  like: number;
  profile: string;
  reply: number;
}

const Coment: React.FC<Data> = (props) => {
  const { jam, name, username, description, profile, image } = props;


  const [likes, setLikes] = useState<number>(0);
  const [liked, setLiked] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  async function del(id: number) {
    if (!confirm("Are you sure?")) return false;
    try {
      const res = await API.delete(`/reply/${id}`);
      console.log(res.data);
      dispatch(fetchReplyThread());
    } catch (error) {
      throw error;
    }
  }

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
      <Card my={1} bg={"transparent"} _hover={{ bg: "#E5E5E5" }}>
        <Flex p={4} gap={1} mb={-4}>
          <Avatar name="gatot" src={profile} />
          <Flex flexDirection={"column"} w={"full"}>
            <Flex justifyContent={"space-between"}>
              <Flex gap={1}>
                <Heading size="m">{name}</Heading>
                <Text>@{username}</Text>
                <Icon
                  boxSize={1.5}
                  mt={3}
                  viewBox="0 0 200 200"
                  color="GrayText"
                >
                  <path
                    fill="currentColor"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                  />
                </Icon>
                <Text color="gray">{timeAgo(jam)}</Text>
              </Flex>
              <Menu isLazy>
                <MenuButton
                  bg={"transparent"}
                  _hover={{ bg: "transparent" }}
                  as={Button}
                  rightIcon={<CgMenuRound />}
                ></MenuButton>
                <MenuList>
                  <MenuItem onClick={() => del(props.id)}>Delete</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
            <Text fontSize="14" mt={-4} py={4} textAlign={"justify"}>
              {description}
            </Text>
            <Image src={image} borderRadius={"10px"} w={"50%"} my={2} />
            <Flex mb={2} ml={-4} gap={5}>
              <Button _hover={{ bg: "white" }} bg="transparent" onClick={handlelike}>
                <AiOutlineHeart size={25} color={liked ? "red" : "gray"} />
                <Text ml={2} color="gray">
                  {likes}
                </Text>
              </Button>
              <Button _hover={{ bg: "white" }} bg="transparent">
                <MdOutlineInsertComment size={25} color="gray" />
                <Text ml={2} color="gray">
                  0
                </Text>
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </>
  );
};

export default Coment;
