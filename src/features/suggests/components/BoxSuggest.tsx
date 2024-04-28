import { Box, Card, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { fetchFollow } from "../../../stores/slices/followSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../stores/types/rootState";
import FollowCard from "../../follows/components/FollowCard";
import { userSlice } from "../../../stores/slices/userSlice";

const BoxSuggest: React.FC = () => {
  const getSuggest = useAppSelector((state) => state.follow);
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth.id);

  useEffect(() => {
    dispatch(fetchFollow());
    // dispatch(userSlice.actions.GET_USERS({}));
  }, [auth, dispatch]);

  return (
    <>
      <Card
        mx={"2"}
        borderRadius="20px"
        w="400px"
        bg={"#E5E5E5"}
        h={"260px"}
      >
        <Heading fontSize="15px" position={"sticky"} m={2}>
          Suggested for you
        </Heading>
        {/* {getSuggest?.isLoading && <div>Loading...</div>} */}
        <Box
          maxHeight="220px"
          mx={"2"}
          borderRadius="20px"
          w="380px"
          bg={"#E5E5E5"}
          overflowY="scroll"
          h={250}
          pb={2}
        >
          {getSuggest.data.followers.map((follower, index) => (
            <FollowCard
              key={index}
              id={follower.id}
              full_name={follower.full_name}
              user_name={follower.user_name}
              profile_picture={follower.profile_picture}
              following={getSuggest.data.followings}
            />
          ))}
        </Box>
      </Card>
    </>
  );
};

export default BoxSuggest;
