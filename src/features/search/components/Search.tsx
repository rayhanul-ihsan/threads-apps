import {
  Avatar,
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useSearch } from "../hooks/useSearch";
import React, { useEffect, useState } from "react";
import { IFollow } from "../../../interface/user";
import { useFollow } from "../../follows/hooks/useFollow";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../stores/types/rootState";
import { fetchFollow } from "../../../stores/slices/followSlice";
import FollowCard from "../../follows/components/FollowCard";

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

  // const istrue =
  //   props.following && props.following.some((i) => i.id === props.id);
  // const [foll, setFoll] = React.useState<boolean>(istrue || false);
  // const { handleFollow, handleUnfollow } = useFollow();
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
