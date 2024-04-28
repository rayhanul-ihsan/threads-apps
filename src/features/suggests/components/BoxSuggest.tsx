import { Box, Card, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { fetchFollow } from "../../../stores/slices/followSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../stores/types/rootState";
import FollowCard from "../../follows/components/FollowCard";

const BoxSuggest: React.FC = () => {
  const [visibleFollowers, setVisibleFollowers] = React.useState<number>(3);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const getSuggest = useAppSelector((state) => state.follow);
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth.id);

  useEffect(() => {
    dispatch(fetchFollow());
  }, [auth, dispatch]);

  // Handle scrolling event
  const handleScroll = (e: React.UIEvent<Element>) => {
    const bottom =
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
      e.currentTarget.clientHeight;
    if (bottom && !isLoading) {
      setIsLoading(true);
      setTimeout(() => {
        setVisibleFollowers((prevCount) => prevCount + 3);
        setIsLoading(false);
      }, 1000); // Simulate loading delay
    }
  };

  return (
    <>
      <Card
        mx={"2"}
        borderRadius="20px"
        w="400px"
        bg={"#E5E5E5"}
      >
        <Heading fontSize="15px" position={"sticky"} m={2}>
          Suggested for you
        </Heading>
        {/* {getSuggest?.isLoading && <div>Loading...</div>} */}
        <Box
          maxHeight="200px"
          mx={"2"}
          borderRadius="20px"
          w="380px"
          bg={"#E5E5E5"}
          overflowY="scroll"
          h={250}
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
