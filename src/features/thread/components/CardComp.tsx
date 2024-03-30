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
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../stores/types/rootState";
import { AUTH_CHECK } from "../../../stores/rootReducer";

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

const CardComp: React.FC<Data> = (props) => {
  const { id, jam, name, username, description, like, profile, image } = props;

  const { isOpen, onOpen, onClose } = useDisclosure();

  // auth
  const auth = useSelector((state: RootState) => state.auth);
  // auth

  const [likes, setLikes] = useState<number>(0);
  const [liked, setLiked] = useState<boolean>(false);

  const handlelike = () => {
    if (!liked) {
      setLikes(like + 1);
    } else {
      setLikes(likes - 1);
    }
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
          <Box>
            <Flex alignItems="center" gap={1}>
              <Heading
                _hover={{ fontdirect: "underline", cursor: "pointer" }}
                size="m"
              >
                {name}
              </Heading>
              <Text>@{username}</Text>
              <Icon boxSize={1.5} mt={1} viewBox="0 0 200 200" color="gray.500">
                <path
                  fill="currentColor"
                  d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                />
              </Icon>
              <Text color="gray">12h</Text>
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
