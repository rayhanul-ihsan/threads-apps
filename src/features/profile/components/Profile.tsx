import React, { useEffect } from "react";
import {
  Box,
  Button,
  Card,
  Flex,
  Image,
  Text,
  // Avatar,
  // Circle,
  // Heading,
  // Icon,
  // Input,
  // InputGroup,
  // InputLeftElement,
  // InputRightElement,
  // Modal,
  // ModalBody,
  // ModalCloseButton,
  // ModalContent,
  // ModalFooter,
  // ModalHeader,
  // ModalOverlay,
  // useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  selectFollowersCount,
  selectFollowingsCount,
} from "../../../stores/slices/followSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../stores/types/rootState";
import { AUTH_CHECK } from "../../../stores/rootReducer";
import { API } from "../../../libs/api";
import { NavLink } from "react-router-dom";

const Profile: React.FC = () => {
  let boxBg = useColorModeValue("white !important", "#111c44 !important");

  const followersCount = useAppSelector(selectFollowersCount);
  const followingsCount = useAppSelector(selectFollowingsCount);

  // const { isOpen, onOpen, onClose } = useDisclosure();
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
        h="320px"
        w="400px"
      >
        <Text fontWeight="500" my={2} mx={4}>
        Profile
        </Text>
        <Flex direction="column" alignItems="center" mx={2}>
          <Image
            src={
              auth.image_cover
                ? auth.image_cover
                : "https://i.ibb.co/5GT7KzT/hamza-erbay-9-UK-GTHw-Vx4-unsplash.jpg"
            }
            // maxW='100%'
            w={"100%"}
            h={"20%"}
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
            <NavLink to="/Detail-Profile">
              <Button
                _hover={{ bg: "#6178D6", color: "black" }}
                rounded={20}
                color="white"
                bg="#482AE3"
                boxSize={"fit-content"}
                border="2px"
                fontSize={13}
                py={2}
                mt={-1}
                alignItems={"end"}
              >
                My Profile
              </Button>
            </NavLink>
          </Flex>
          <Box mb={4} textAlign={"left"} w={"100%"}>
            <Text textAlign={"left"} fontWeight="700">
              {auth.full_name}
            </Text>
            <Text
              textAlign={"left"}
              fontSize="13px"
              fontWeight={"500"}
              textColor="GrayText"
            >
              @{auth.user_name}
            </Text>
            <Text textAlign={"left"} fontSize="14px" fontWeight="600">
              {auth.bio}
            </Text>
          </Box>
          <Flex w="100%" px="15px">
            <Flex gap={2} mr={4}>
              <Text fontWeight="bold" textColor="black" fontSize="18px">
                {followingsCount}
              </Text>
              <Text fontSize="18px" textColor="GrayText" textAlign="center">
                Following
              </Text>
            </Flex>
            <Flex gap={2}>
              <Text fontWeight="bold" textColor="black" fontSize="18px">
                {followersCount}
              </Text>
              <Text fontSize="18px" textColor="GrayText" textAlign="center">
                Follower
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </>
  );
};

export default Profile;
