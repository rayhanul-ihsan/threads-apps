import React, { useEffect } from "react";
import { Card, Heading } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFollow } from "../../../stores/slices/followSlice";
import { AppDispatch, RootState } from "../../../stores/types/rootState";
import SuggestComp from "./SuggestComp";

const BoxSuggest: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const getSuggest = useSelector((state: RootState) => state.follow);
  console.log("data:", getSuggest)

  useEffect(() => {
    dispatch(fetchFollow());
  }, []);

  return (
    <>
      <Card mx={"2"} borderRadius="20px" w="100%" bg={"#E5E5E5"}>
        <Heading fontSize="15px" m={2}>
          Suggested for you
        </Heading>
        {getSuggest?.isLoading && <div>Loading...</div>}
        {getSuggest.data.followers.slice(0, 4).map((item, index) => (
          <SuggestComp
            key={index}   
            id={item.id}
            full_name={item.full_name}
            user_name={item.user_name}
            profile_picture={item.profile_picture}
          />
        ))}
      </Card>
    </>
  );
};

export default BoxSuggest;
