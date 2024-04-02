import {
  Box,
  Button,
  Card,
  Flex,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../stores/types/rootState";
import { API } from "../../../libs/api";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import CardComp from "../../thread/components/CardComp";
import { AUTH_CHECK } from "../../../stores/rootReducer";
import { fetchThread } from "../../../stores/slices/threadSlice";

const ProfileDetailComp: React.FC = () => {
  let boxBg = useColorModeValue("white !important", "#111c44 !important");

  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const stroreAuthData = localStorage.getItem("authDate");
    if (stroreAuthData) {
      const parseAuthData = JSON.parse(stroreAuthData);
      dispatch(
        AUTH_CHECK({
          user: parseAuthData,
        })
      );
    }
  }, [dispatch, auth]);

  // thread

  const handleGetThread = async () => {
    try {
      const response = await API.get("/thread");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getThread = useAppSelector((state) => state.thread);

  useEffect(() => {
    handleGetThread();
    dispatch(fetchThread());
  }, []);

  const filterThread = getThread.data.filter(
    (item) => item.author.user_name == auth.user_name
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
                auth.image_cover
                  ? auth.image_cover
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
              <NavLink to={"/edit-profile"}>
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
              </NavLink>
            </Flex>
            <Box mb={2} textAlign={"left"} w={"100%"}>
              <Text textAlign={"left"} fontWeight="700">
                {auth.full_name}
              </Text>
              <Text
                textAlign={"left"}
                fontSize="12px"
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

        {filterThread.map((item) => (
          <CardComp
            reply={item.replies}
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

export default ProfileDetailComp;
