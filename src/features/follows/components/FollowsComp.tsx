import {
  Box,
  Card,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import FollowCard from "../hooks/FollowCard";
import { fetchFollow } from "../../../stores/slices/followSlice";
import {  useAppDispatch, useAppSelector } from "../../../stores/types/rootState";

const FollowsComp: React.FC = () => {
  const dispatch = useAppDispatch();

  const getFollow = useAppSelector((state) => state.follow);
  console.log("getFollow", getFollow)

  useEffect(() => {
    dispatch(fetchFollow());
  }, []);

  return (
    <>
      <Box>
        <Card p={2} bg={"transparent"} w={"100%"}>
          <Heading fontSize="23px" gap={2} mb={6}>
            Follows
          </Heading>
          <Tabs isFitted>
            <TabList>
              <Tab>Followers</Tab>
              <Tab>Following</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                {getFollow.isLoading && <h1>Loading...</h1>}
                {getFollow.data?.followers.map((item, index) => (
                  <FollowCard
                    key={index}
                    id={item.id}
                    full_name={item.full_name}
                    user_name={item.user_name}
                    profile_picture={item.profile_picture}
                    bio={item.bio}
                  />
                ))}
              </TabPanel>
              <TabPanel>
                {getFollow.isLoading && <h1>Loading...</h1>}
                {getFollow.data?.followings.map((item, index) => (
                  <FollowCard
                    key={index}
                    id={item.id}
                    full_name={item.full_name}
                    user_name={item.user_name}
                    profile_picture={item.profile_picture}
                    bio={item.bio}
                  />
                ))}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>
      </Box>
    </>
  );
};

export default FollowsComp;
