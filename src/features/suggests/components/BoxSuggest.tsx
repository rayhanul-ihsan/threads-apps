import { Card, Heading } from "@chakra-ui/react";
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
      <Card mx={"2"} borderRadius="20px" w="400px" bg={"#E5E5E5"} overflowY="scroll" maxHeight="400px" onScroll={handleScroll}>
        <Heading fontSize="15px" m={2}>
          Suggested for you
        </Heading>
        {/* {getSuggest?.isLoading && <div>Loading...</div>} */}
        {getSuggest.data.followers.slice(0, visibleFollowers).map((item, index) => (
          <FollowCard
            key={index}
            id={item.id}
            full_name={item.full_name}
            user_name={item.user_name}
            profile_picture={item.profile_picture}
            following={getSuggest.data.followings}
          />
        ))}
        {isLoading && <div>Loading...</div>}
      </Card>
    </>
  );
};

export default BoxSuggest;
