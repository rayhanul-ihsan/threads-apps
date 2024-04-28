import {
  Card,
  Input,
  InputGroup,
  InputLeftElement
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa6";
import { fetchFollow } from "../../../stores/slices/followSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../stores/types/rootState";
import FollowCard from "../../follows/components/FollowCard";
import { useSearch } from "../hooks/useSearch";

export default function Search() {
  const { filteredUsers, searchUsers } = useSearch();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchQuery(value);
    searchUsers(value);
  };

  useEffect(() => {
    if (!searchQuery) return;
    setSearchQuery("");
  }, [searchQuery]);

  const getFollow = useAppSelector((state) => state.follow);

  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth.id);
  useEffect(() => {
    dispatch(fetchFollow());
  }, [auth]);
  return (
    <>
      <Card
        p={2}
        mt={2}
        bg={"transparent"}
        mr={30}
        w={"100%"}
        alignItems={"center"}
      >
        <InputGroup
          size="md"
          border={2}
          borderColor={"black"}
          rounded={20}
          gap={1}
        >
          <InputLeftElement
            pointerEvents="none"
            children={<FaUser color="gray.300" />}
          />
          <Input
            pr="4.5rem"
            type={"text"}
            placeholder=""
            // value={searchQuery}
            onChange={handleSearchInputChange}
          />
        </InputGroup>
        {/* {[...getFollow.data.followers, ...getFollow.data.followings]
          .filter(
            (value, index, self) =>
              index ===
              self.findIndex(
                (t) =>
                  t.email === value.email && t.user_name === value.user_name
              )
          )
          .map((item, index) => (
            <FollowCard
              key={index}
              id={item.id}
              full_name={item.full_name}
              user_name={item.user_name}
              profile_picture={item.profile_picture}
              bio={item.bio}
              following={getFollow.data.followings}
            />
          ))} */}
        {filteredUsers.map((item, index) => (
          <FollowCard
            key={index}
            id={item.id}
            full_name={item.full_name}
            user_name={item.user_name}
            profile_picture={item.profile_picture}
            bio={item.bio}
            following={getFollow.data.followings}
          />
        ))}
      </Card>
    </>
  );
}
