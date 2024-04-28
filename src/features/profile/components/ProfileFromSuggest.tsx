import {
  Box,
  Button,
  Card,
  Circle,
  Flex,
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
import React, { useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { NavLink, Navigate } from "react-router-dom";
import { Likes } from "../../../interface/thread";
import { API } from "../../../libs/api";
import {
  selectFollowersCount,
  selectFollowingsCount,
} from "../../../stores/slices/followSlice";
import { fetchThread } from "../../../stores/slices/threadSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../stores/types/rootState";
import CardComp from "../../thread/components/CardComp";

interface Data {
  id?: number;
  full_name?: string;
  user_name?: string;
  bio?: string;
  profile_picture?: string;
  image_cover?: string;
  reply?: number;
  like?: Likes[];
  userLogin?: number;
}

const ProfileFromSuggest = (props: Data) => {
  const { full_name, user_name, bio, profile_picture, image_cover } = props;
  let boxBg = useColorModeValue("white !important", "#111c44 !important");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const followersCount = useAppSelector(selectFollowersCount);
  const followingsCount = useAppSelector(selectFollowingsCount);

  const handleGetThread = async () => {
    try {
      const response = await API.get("/thread");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  const dispatch = useAppDispatch();

  const getThread = useAppSelector((state) => state.thread);
  const auth = useAppSelector((state) => state.auth.id);
  const auth2 = useAppSelector((state) => state.auth);
  const [cover, setCover] = React.useState<string | null | undefined | File>(
    auth2.image_cover
  );
  const [preViewCover, setPreViewCover] = React.useState<
    string | null | undefined
  >(auth2.image_cover);

  const [picture, setPicture] = React.useState<
    string | null | undefined | File
  >(auth2.profile_picture);
  const [preViewPicture, setPreViewPicture] = React.useState<
    string | null | undefined
  >(auth2.profile_picture);

  const token = localStorage.getItem("token");

  const [inputData, setInputData] = React.useState<string | any>({
    full_name: auth2.full_name,
    user_name: auth2.user_name,
    bio: auth2.bio,
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  }
  function handleChangeCover(e: React.ChangeEvent<HTMLInputElement>) {
    const { files } = e.target;
    if (files && files.length > 0) {
      const selectedCover = files[0];
      const reader = new FileReader();

      reader.onload = () => {
        if (typeof reader.result === "string") {
          setCover(selectedCover);
          setPreViewCover(reader.result);
        }
      };
      reader.readAsDataURL(selectedCover);
    }
  }

  function handleChangePicture(e: React.ChangeEvent<HTMLInputElement>) {
    const { files } = e.target;
    if (files && files.length > 0) {
      const selectedPicture = files[0];
      const reader = new FileReader();

      reader.onload = () => {
        if (typeof reader.result === "string") {
          setPicture(selectedPicture);
          setPreViewPicture(reader.result);
        }
      };
      reader.readAsDataURL(selectedPicture);
    }
  }

  async function handleSubmit() {
    try {
      const formData = new FormData();
      formData.append("full_name", inputData.full_name);
      formData.append("user_name", inputData.user_name);
      formData.append("bio", inputData.bio);

      if (cover instanceof File) {
        formData.append("image_cover", cover);
        await API.patch(`/upload/cover/${auth2.id}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "content-type": "multipart/form-data",
          },
        });
      }

      if (picture instanceof File) {
        formData.append("profile_picture", picture);
        await API.patch(`/upload/picture/${auth2.id}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "content-type": "multipart/form-data",
          },
        });
      }

      const response = await API.patch(`/update/user/${auth2.id}`, inputData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const updateProfile = response.data.data;
      setInputData({
        full_name: updateProfile.full_name,
        user_name: updateProfile.user_name,
        bio: updateProfile.bio,
      });

      // Navigate({ to: "/Detail-profile" });
      onClose();
      dispatch(fetchThread());
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    setInputData({
      full_name: auth2.full_name,
      user_name: auth2.user_name,
      bio: auth2.bio,
    });
    if (auth2.image_cover) {
      setCover(auth2.image_cover);
      setPreViewCover(auth2.image_cover);
    }
    if (auth2.profile_picture) {
      setPicture(auth2.profile_picture);
      setPreViewPicture(auth2.profile_picture);
    }
    handleGetThread();
    dispatch(fetchThread());
  }, [auth2.id]);

  if (auth === 0) return null;

  const filterThread = getThread.data.filter(
    (item) => item.author.user_name == user_name
  );

  return (
    <>
      <Box h={"100%"}>
        <Card
          _hover={{ bg: "#E5E5E5" }}
          mx={1}
          mb={2}
          h="290px"
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
                  : "https://i.ibb.co/5GT7KzT/hamza-erbay-9-UK-GTHw-Vx4-unsplash.jpg"
              }
              // maxW='100%'
              w={"100%"}
              h={"13%"}
              objectFit="cover"
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
              {props.user_name === auth2.user_name && (
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
                  onClick={onOpen}
                >
                  Edit Profile
                </Button>
              )}
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
              <Text textAlign={"left"} fontSize="14px" fontWeight="600">
                {bio}
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
        {filterThread?.map((item) => (
          <CardComp
            key={item.id}
            id={item.id}
            name={item.author.full_name}
            username={item.author.user_name}
            reply={item.replies.length}
            profile={item.author.profile_picture}
            image={item.image}
            jam={item.createdAt}
            description={item.content}
            like={item.likes}
          />
        ))}
      </Box>
      <Modal
        isCentered
        size="xl"
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent
          bg={"#E5E5E5"}
          // _hover={{ bg: "#E5E5E5" }}
          as="form"
          onSubmit={handleSubmit}
        >
          <ModalHeader
            color={"black"}
            _hover={{ color: "gray", cursor: "pointer" }}
          >
            Edit Profile
          </ModalHeader>
          <NavLink to={"/"}>
            <Button
              position={"absolute"}
              right={6}
              top={4}
              colorScheme="green"
              w="10%"
              rounded="full"
              onClick={handleSubmit}
            >
              Save
            </Button>
          </NavLink>
          {/* <ModalCloseButton /> */}
          <ModalBody w="100%" margin="auto" mb={4}>
            <InputGroup w="100%" _hover={{ color: "white" }}>
              <InputLeftElement
                pointerEvents="none"
                cursor="pointer"
                w="100%"
                h="200px"
              >
                <Image
                  src={auth2.image_cover}
                  rounded="lg"
                  w="100%"
                  h="200px"
                  objectFit="cover"
                />
              </InputLeftElement>

              <Input
                opacity="0"
                type="file"
                name="image_cover"
                cursor="pointer"
                w="100%"
                placeholder="edit cover"
                _placeholder={{ opacity: 1, color: "red" }}
                zIndex="100"
                accept="image/*"
                onChange={handleChangeCover}
              />
              <InputRightElement>
                <Text
                  bg="#1D1D1D"
                  color="white"
                  p="5"
                  rounded="full"
                  fontSize="20px"
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
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
                    src={auth2.profile_picture}
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
                name="profile_picture"
                cursor="pointer"
                w="150px"
                h="150px"
                accept="image/*"
                onChange={handleChangePicture}
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
              value={inputData.full_name}
              placeholder="Fulln  ame"
              name="full_name"
              onChange={handleChange}
            />
            <Input
              rounded="none"
              borderRight="none"
              borderLeft="none"
              borderTop="none"
              borderBottom="1px"
              focusBorderColor="#1D1D1D"
              value={inputData.user_name}
              placeholder="Username"
              name="user_name"
              onChange={handleChange}
            />
            <Input
              my="3"
              rounded="none"
              borderRight="none"
              borderLeft="none"
              borderTop="none"
              borderBottom="1px"
              focusBorderColor="#1D1D1D"
              value={inputData.bio}
              placeholder="Bio"
              name="bio"
              onChange={handleChange}
            />
          </ModalBody>
          {/* <ModalCloseButton />  */}
          {/* <ModalFooter>
            <Button colorScheme="red" rounded="full" mr={5} onClick={onClose}>
              Cancel
            </Button>

            <Button colorScheme="green" rounded="full" onClick={handleSubmit}>
              Save
            </Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileFromSuggest;
