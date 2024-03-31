import React, { useEffect } from "react";
import {
  Box,
  Button,
  Card,
  Flex,
  Image,
  Text,
  Avatar,
  Circle,
  Heading,
  Icon,
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
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../stores/types/rootState";
import { AUTH_CHECK } from "../../../stores/rootReducer";
import { API } from "../../../libs/api";

const Profile: React.FC = () => {
  let boxBg = useColorModeValue("white !important", "#111c44 !important");
  // let mainText = useColorModeValue("gray.800", "white");
  // let secondaryText = useColorModeValue("gray.400", "gray.400");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  async function getProfile() {
    const respone = await API.get("user/me/current");
    dispatch(AUTH_CHECK({ user: respone.data }));
  }
  useEffect(() => {
    getProfile();
  }, [dispatch, auth]);

  return (
    <>
      <Card
        mx={"2"}
        my={2}
        borderRadius="15px"
        bg={"#E5E5E5"}
        // p='5px'
        h="300px"
        w="100%"
      >
        <Text fontWeight="500" my={2} mx={4}>
          My Profile
        </Text>
        <Flex direction="column" alignItems="center" mx={2}>
          <Image
            src={
              auth.image_cover
                ? auth.image_cover
                : "https://i.ibb.co/xmP2pS6/Profile.png"
            }
            // maxW='100%'
            w={"100%"}
            h={"30%"}
            borderRadius="20px"
          />
          <Flex justify="space-between" w="full" p={3}>
            <Image
              src={
                auth.profile_picture
                  ? auth.profile_picture
                  : "https://bit.ly/broken-link"
              }
              border="5px solid red"
              borderColor={boxBg}
              width="68px"
              height="68px"
              mt="-38px"
              borderRadius="50%"
            />
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
          <Box mb={4} textAlign={"left"} w={"100%"}>
            <Text textAlign={"left"} fontWeight="700">
              {auth.full_name}
            </Text>
            <Text
              textAlign={"left"}
              fontSize="10px"
              fontWeight={"500"}
              textColor="GrayText"
            >
              @{auth.user_name}
            </Text>
            <Text textAlign={"left"} fontSize="12px" fontWeight="600">
              {auth.bio}
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
                    src={auth.image_cover}
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
                      src={auth.profile_picture}
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
                // value={auth.full_name}
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
    </>
  );
};

export default Profile;
