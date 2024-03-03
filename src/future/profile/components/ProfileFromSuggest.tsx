import React, { useEffect, useState } from "react";
// Chakra imports
import {
  Avatar,
  Box,
  Button,
  Card,
  Circle,
  Flex,
  Heading,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../stores/types/rootState";
import { AUTH_CHECK } from "../../../stores/rootReducer";
import { fetchThread } from "../../../stores/slices/threadSlice";
import CardComp from "../../thread/components/CardComp";
import { API } from "../../../libs/api";
import { IUser } from "../../../interface/user";

interface Data {
  id?: number;
  full_name?: string;
  user_name?: string;
  bio?: string;
  profile_picture?: string;
  image_cover?: string;
}

const ProfileFromSuggest = (props: Data) => {
  const { full_name, user_name, bio, profile_picture, image_cover } = props;
  let boxBg = useColorModeValue("white !important", "#111c44 !important");

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box h={"100%"}>
        <Card
          _hover={{ bg: "#E5E5E5" }}
          mx={1}
          mb={2}
          h="328px"
          bg={"transparent"}
        >
          <Text fontWeight="500" my={2} mx={4}>
            My Profile
          </Text>
          <Flex direction="column" alignItems="center" mx={2} mb={2}>
            <Image
              src={
                image_cover
                  ? image_cover
                  : "https://i.ibb.co/xmP2pS6/Profile.png"
              }
              // maxW='100%'
              w={"100%"}
              h={"30%"}
              borderRadius="20px"
            />
            <Flex justify="space-between" w="full" p={3} mb={-2}>
              <Image
                src={
                  profile_picture
                    ? profile_picture
                    : "https://bit.ly/broken-link"
                }
                border="5px solid red"
                borderColor={boxBg}
                width="68px"
                height="68px"
                mt="-38px"
                borderRadius="50%"
              />
              {/* <NavLink to={"/edit-profile"}>
                </NavLink> */}
                <Button
                  boxSize={"fit-content"}
                  fontSize={13}
                  rounded={15}
                  border="2px"
                  borderColor={"black"}
                  bg={"transparent"}
                  mt={1}
                  alignItems={"end"}
                  onClick={onOpen}
                >
                  Edit Profile
                </Button>
            </Flex>
            <Box mb={2} textAlign={"left"} w={"100%"}>
              <Text textAlign={"left"} fontWeight="700">
                {full_name}
              </Text>
              <Text
                textAlign={"left"}
                fontSize="12px"
                fontWeight={"500"}
                textColor="GrayText"
              >
                @{user_name}
              </Text>
              <Text textAlign={"left"} fontSize="12px" fontWeight="600">
                {bio}
              </Text>
            </Box>
            <Flex gap={2} w="100%" px="20px">
              <Flex gap={1}>
                <Text fontWeight="600" textColor="black" fontSize="14px">
                  1
                </Text>
                <Text fontSize="14px" textColor="GrayText" textAlign="center">
                  Following
                </Text>
              </Flex>
              <Flex gap={1}>
                <Text fontWeight="400" textColor="black" fontSize="14px">
                  666
                </Text>
                <Text fontSize="14px" textColor="GrayText" textAlign="center">
                  Follower
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Card>

        <Modal
          isCentered
          size="xl"
          onClose={onClose}
          isOpen={isOpen}
          motionPreset="slideInBottom"
        >
          <ModalOverlay />

          <ModalContent bg="#1D1D1D" color="white">
            <ModalHeader>Edit Profile</ModalHeader>

            <ModalCloseButton />

            <ModalBody w="100%" margin="auto">
              <form>
                <InputGroup w="100%" _hover={{ color: "white" }}>
                  <InputLeftElement
                    pointerEvents="none"
                    cursor="pointer"
                    w="100%"
                    h="200px"
                  >
                    <Image
                      src="https://wallpapers.com/images/high/blue-gradient-background-gu71dwd19no9ra2v.webp"
                      rounded="lg"
                      w="100%"
                      h="200px"
                      objectFit="cover"
                    />
                  </InputLeftElement>

                  <Input
                    opacity="0"
                    type="file"
                    name="cover_photo"
                    cursor="pointer"
                    w="100%"
                    placeholder="edit cover"
                    _placeholder={{ opacity: 1, color: "red" }}
                    zIndex="100"
                    accept="image/*"
                    // onChange={handleCover}
                  />
                  <InputRightElement>
                    <Text
                      bg="#1D1D1D"
                      color="white"
                      p="5"
                      rounded="full"
                      fontSize="20px"
                    >
                      <FaEdit />
                    </Text>
                  </InputRightElement>
                </InputGroup>

                <InputGroup
                  w="150px"
                  bg="#1D1D1D"
                  mt="80px"
                  rounded="full"
                  color="green.500"
                  cursor="pointer"
                  _hover={{ color: "white" }}
                >
                  <InputLeftElement
                    pointerEvents="none"
                    cursor="pointer"
                    w="150px"
                    h="150px"
                  >
                    <Circle>
                      <Image
                        src="https://i.pinimg.com/564x/c0/c8/17/c0c8178e509b2c6ec222408e527ba861.jpg"
                        rounded="full"
                        w="120px"
                        h="120px"
                        objectFit="cover"
                      />
                    </Circle>
                  </InputLeftElement>

                  <Input
                    opacity="0"
                    type="file"
                    name="picture"
                    cursor="pointer"
                    w="150px"
                    h="150px"
                    accept="image/*"
                    // onChange={handlePicture}
                  />
                </InputGroup>

                <Input
                  my="3"
                  rounded="none"
                  borderRight="none"
                  borderLeft="none"
                  borderTop="none"
                  borderBottom="1px"
                  focusBorderColor="#1D1D1D"
                  // value={inputData.name}
                  placeholder="Name"
                  name="name"
                  // onChange={handleChange}
                />
                <Input
                  rounded="none"
                  borderRight="none"
                  borderLeft="none"
                  borderTop="none"
                  borderBottom="1px"
                  focusBorderColor="#1D1D1D"
                  // value={inputData.username}
                  placeholder="Username"
                  name="username"
                  // onChange={handleChange}
                />
                <Input
                  my="3"
                  rounded="none"
                  borderRight="none"
                  borderLeft="none"
                  borderTop="none"
                  borderBottom="1px"
                  focusBorderColor="#1D1D1D"
                  // value={inputData.bio}
                  placeholder="Bio"
                  name="bio"
                  // onChange={handleChange}
                />
              </form>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="red"
                rounded="full"
                mr={5}
                // onClick={onClose}
              >
                Cancel
              </Button>

              <Button
                colorScheme="green"
                rounded="full"
                // onClick={handleSubmit}
              >
                Save
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};

export default ProfileFromSuggest;
