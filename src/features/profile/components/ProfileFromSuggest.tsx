import {
  Box,
  Button,
  Card,
  Image,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { API } from "../../../libs/api";
import CardComp from "../../thread/components/CardComp";
import { fetchThread } from "../../../stores/slices/threadSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../stores/types/rootState";

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

  // // thread

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

  useEffect(() => {
    handleGetThread();
    dispatch(fetchThread());
  }, []);

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
        {filterThread?.map((item) => (
          <CardComp
            key={item.id}
            id={item.id}
            name={item.author.full_name}
            username={item.author.user_name}
            profile={item.author.profile_picture}
            image={item.image}
            jam={item.createdAt}
            description={item.content}
            like={item.likes}
          />
        ))}
      </Box>
    </>
  );
};

export default ProfileFromSuggest;
