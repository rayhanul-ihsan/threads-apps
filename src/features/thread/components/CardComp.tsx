import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { LuImagePlus } from "react-icons/lu";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineInsertComment } from "react-icons/md";
import {
  Avatar,
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Text,
  Icon,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  ModalFooter,
  Image,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch, useAppSelector } from "../../../stores/types/rootState";
import { API } from "../../../libs/api";
import { fetchThread } from "../../../stores/slices/threadSlice";
import { CgMenuRound } from "react-icons/cg";
import { Likes } from "../../../interface/thread";

interface Data {
  id: number;
  name: string;
  username: string;
  jam: string;
  image: string;
  description: string;
  profile: string;
  reply: number;
  like: Likes[];
  userLogin?: number
}

const CardComp: React.FC<Data> = (props) => {
  const { id, jam, name, username, description, like, profile, image, reply } = props;

  const dispatch = useAppDispatch()

  async function del(id: number) {
    if (!confirm("Are you sure?")) return false;
    try {
      const res = await API.delete(`/thread/${id}`);
      // console.log( res.data);
      dispatch(fetchThread());
    } catch (error) {
      throw error;
    }
  }
  async function likeThread(id: number) {
    try {
      const res = await API.post(`/like/thread`, { thread: id });
      // console.log( res.data);
      // dispatch(fetchThread());
    } catch (error) {
      throw error;
    }
  }
  const { isOpen, onOpen, onClose } = useDisclosure();

  // auth
  const auth = useSelector((state: RootState) => state.auth);
  // auth
  const isTrue = props.like.some((item) => item.author.id === props.userLogin);
  const [likes, setLikes] = useState<number>(props.like.length);
  const [liked, setLiked] = useState<boolean>(isTrue);
  console.log(isTrue, liked, props.userLogin)

  const handlelike = () => {
    if (!liked) {
      setLikes(likes + 1);
    } else {
      setLikes(likes - 1);
    }
    likeThread(props.id);
    setLiked(!liked);
  };

  return (
    <>
      <Card
        mt={2}
        p={2}
        _hover={{ bg: "#E5E5E5" }}
        border={"darkgray"}
        borderColor={"black"}
        bg={"transparent"}
        w={"100%"}
      >
        <Flex gap={4}>
          <Avatar name="gatot" src={profile} />
          <Box w={"100%"}>
            <Flex justifyContent={"space-between"}>
              <Flex alignItems="center" gap={1}>
                <Heading
                  _hover={{ fontdirect: "underline", cursor: "pointer" }}
                  size="m"
                >
                  {name}
                </Heading>
                <Text>@{username}</Text>
                <Icon
                  boxSize={1.5}
                  mt={1}
                  viewBox="0 0 200 200"
                  color="gray.500"
                >
                  <path
                    fill="currentColor"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                  />
                </Icon>
                <Text color="gray">12h</Text>
              </Flex>
              {props.username === auth.user_name && (
                <Menu isLazy>
                  <MenuButton
                    bg={"transparent"}
                    _hover={{ bg: "transparent" }}
                    as={Button}
                    rightIcon={<CgMenuRound />}
                  ></MenuButton>
                  <MenuList  >
                    <MenuItem onClick={() => del(props.id)} >Delete</MenuItem>
                  </MenuList>
                </Menu>
              )}
            </Flex>
            <NavLink to={`/status/${id}`}>
              <Text textAlign={"justify"}>{description}</Text>
              <Image src={image} borderRadius={"10px"} w={"50%"} my={2} />
            </NavLink>
            <Flex gap={5}>
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
              <Button
                _hover={{ bg: "#EAECEF" }}
                onClick={onOpen}
                bg="trasnsparent"
              >
                <MdOutlineInsertComment size={25} color="gray" />
                <Text ml={2} color="gray">
                  {props.reply}
                </Text>
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Card>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          bg={"transparent"}
          _hover={{ bg: "#E5E5E5" }}
          border={"darkgray"}
        >
          <ModalHeader color={"gray"} _hover={{ color: "black" }}>
            Reply
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody my={2}>
            <Flex>
              <Avatar
                name="gatot"
                src={
                  auth.profile_picture
                    ? auth.profile_picture
                    : "https://i.ibb.co/xmP2pS6/Profile.png"
                }
                mr={2}
              />
              <Input
                variant="flushed"
                color={"white"}
                _hover={{ color: "black" }}
                placeholder="What is happening?!"
              />
            </Flex>
          </ModalBody>
          <ModalFooter justifyContent={"space-between"}>
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
              />
            </InputGroup>
            <Button
              _hover={{ bg: "#6178D6", color: "black" }}
              rounded={20}
              color="white"
              bg="#482AE3"
            >
              Post
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CardComp;
