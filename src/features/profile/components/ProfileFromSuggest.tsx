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
import { useEffect } from "react";
import { FaEdit } from "react-icons/fa";
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

  useEffect(() => {
    handleGetThread();
    dispatch(fetchThread());
  }, []);

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
        <ModalContent bg={"gray"} _hover={{ bg: "#E5E5E5" }}>
          <ModalHeader
            color={"black"}
            _hover={{ color: "gray", cursor: "pointer" }}
          >
            Edit Profile
          </ModalHeader>
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
                    src={auth2.profile_picture}
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
      {/* modal reply */}
      {/* <Modal isOpen={isOpen} onClose={onClose}>
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
                src={"https://i.ibb.co/xmP2pS6/Profile.png"}
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
      </Modal> */}
    </>
  );
};

export default ProfileFromSuggest;
