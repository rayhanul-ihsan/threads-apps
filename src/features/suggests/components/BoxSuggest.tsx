import { Card, Heading } from "@chakra-ui/react";
import React, { useEffect, useMemo } from "react";
import { fetchFollow } from "../../../stores/slices/followSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../stores/types/rootState";
import SuggestComp from "./SuggestComp";
import FollowCard from "../../follows/components/FollowCard";

const BoxSuggest: React.FC = () => {
  const getSuggest = useAppSelector((state) => state.follow);
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth.id);

  useEffect(() => {
    dispatch(fetchFollow());
  }, [auth]);

  return (
    <>
      <Card mx={"2"} borderRadius="20px" w="400px" bg={"#E5E5E5"}>
        <Heading fontSize="15px" m={2}>
          Suggested for you
        </Heading>
        {/* {getSuggest?.isLoading && <div>Loading...</div>} */}
        {getSuggest.data.followers.slice(0, 4).map((item, index) => (
          <FollowCard
            key={index}
            id={item.id}
            full_name={item.full_name}
            user_name={item.user_name}
            profile_picture={item.profile_picture}
            following={getSuggest.data.followings}
          />
        ))}
      </Card>
    </>
  );
};

export default BoxSuggest;
