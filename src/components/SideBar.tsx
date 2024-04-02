import React, { useEffect } from "react";

import { CgProfile } from "react-icons/cg";
import { TbLogout2 } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { LuImagePlus } from "react-icons/lu";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMoon, BiSolidHomeAlt2, BiSun } from "react-icons/bi";
import { RiUserSearchLine } from "react-icons/ri";

import {
  Avatar,
  Box,
  Button,
  Icon,
  Flex,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Text,
  useDisclosure,
  useColorMode,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import axios from "axios";
import PostThread from "../features/thread/hooks/PostThread";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../stores/types/rootState";
import { AUTH_CHECK } from "../stores/rootReducer";

const SideBar: React.FC = () => {
  const token = localStorage.getItem("token");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { handleChange, handleChangeFile, postModal } = PostThread();

  const handleLogout = () => {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
    window.location.assign("/login");
  };

  // auth
  const auth = useSelector((state: RootState) => state.auth);
  // auth

  return (
    <>
      <Flex direction="column" height="100vh" position={"fixed"}>
        <Box>
          <Flex justifyContent="space-between" alignItems="center">
            <NavLink to={"/"}>
              <Heading
                _hover={{ color: "#6178D6" }}
                color="#482AE3"
                ml={4}
                p={4}
              >
                Toa
              </Heading>
            </NavLink>
          </Flex>
          <NavLink to={"/"}>
            <Flex pl={4}>
              <Button _hover={{ bg: "transparent", color: "gray" }} bg={"transparent"} >
                <BiSolidHomeAlt2 size={25} />
              </Button>
              <Text
                _hover={{ color: "gray" }}
                fontWeight="600"
                alignItems="center"
                mt={2}
              >
                Home
              </Text>
            </Flex>
          </NavLink>
          <NavLink to={"/search"}>
            <Flex pl={4}>
              <Button _hover={{ bg: "transparent", color: "gray" }} bg={"transparent"} >
                <RiUserSearchLine size={25} />
              </Button>
              <Text
                _hover={{ color: "gray" }}
                fontWeight="600"
                alignItems="center"
                mt={2}
              >
                Search
              </Text>
            </Flex>
          </NavLink>
          <NavLink to={"/follows"}>
            <Flex pl={4}>
              <Button _hover={{ bg: "transparent", color: "gray" }} bg={"transparent"} >
                <AiOutlineHeart size={25} />
              </Button>
              <Text
                _hover={{ color: "gray" }}
                fontWeight="600"
                alignItems="center"
                mt={2}
              >
                Follows
              </Text>
            </Flex>
          </NavLink>
          <NavLink to={"/detail-profile"}>
            <Flex pl={4}>
              <Button _hover={{ bg: "transparent", color: "gray" }} bg={"transparent"} >
                <CgProfile size={25} />
              </Button>
              <Text
                _hover={{ color: "gray" }}
                fontWeight="600"
                alignItems="center"
                mt={2}
              >
                Profile
              </Text>
            </Flex>
          </NavLink>
          <Button
            onClick={onOpen}
            _hover={{ bg: "#6178D6", color: "black" }}
            mt={2}
            ml={2}
            w={"200px"}
            rounded={15}
            color={"white"}
            bg="#482AE3"
          >
            Creat Post
          </Button>
        </Box>

        <Spacer />
        {!token ? (
          <NavLink to={"/login"}>
            <Flex pl={4}>
              <Button _hover={{ bg: "#EAECEF", color: "gray" }} bg="#EAECEF">
                <TbLogout2 />
              </Button>
              <Text
                _hover={{ color: "gray" }}
                fontWeight="600"
                alignItems="center"
                mt={2}
              >
                Login
              </Text>
            </Flex>
          </NavLink>
        ) : (
          <Button
            onClick={handleLogout}
            bg={"transparent"}
            w={"100px"}
            _hover={{ bg: "transparent", color: "gray" }}
          >
            <Flex pl={4}>
              <Button _hover={{ bg: "transparent", color: "gray" }} bg={"transparent"} >
                <TbLogout2 />
              </Button>
              <Text
                _hover={{ color: "gray" }}
                fontWeight="600"
                alignItems="center"
                mt={2}
              >
                Logout
              </Text>
            </Flex>
          </Button>
        )}

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent bg={"gray"} _hover={{ bg: "#E5E5E5" }}>
            <ModalCloseButton />
            <ModalHeader
              color={"black"}
              _hover={{ color: "gray", cursor: "pointer" }}
            >
              Drafts
            </ModalHeader>
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
                  color={"black"}
                  placeholder="What is happening?!"
                  onChange={handleChange}
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
                  onChange={handleChangeFile}
                />
              </InputGroup>
              <Button
                onClick={postModal}
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
      </Flex>
    </>
  );
};

export default SideBar;
