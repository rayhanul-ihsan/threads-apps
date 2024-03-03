import { RiUserSearchLine } from "react-icons/ri";
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
import DftrFollowers from "../../../components/DftrFollowers";
import DaftarFollowers from "../../../components/Daftar-followers";

const Search = () => {
  const {handleChange, data} = useSearch();
  console.log(data)
  // const { filteredUsers, searchUsers } = useSearch();
  // const [searchQuery, setSearchQuery] = useState("");

  // // console.log("filteredUsers:", filteredUsers);

  // const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value } = e.target;
  //   setSearchQuery(value);
  //   searchUsers(value);
  // };

  // useEffect(() => {
  //   if (!searchQuery) return;
  //   setSearchQuery("");
  // }, [searchQuery]);

  const [foll, setFoll] = useState<boolean>(false);

  const handleFollowers = () => {
    if (!foll) {
      setFoll(true);
    } else {
      setFoll(false);
    }
  };
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
            onChange={handleChange}
          />
        </InputGroup>

        {/* {filteredUsers?.map((item) => (
          <Box
            my={2}
            _hover={{ bg: "gray.200" }}
            w={"100%"}
            borderBlock={2}
            borderColor={"black"}
            key={item.id}
          >
            <Flex
              gap={1}
              p={2}
              justifyContent="space-between"
              alignItems={"center"}
            >
              <Flex alignItems={"center"} gap={1}>
                <Avatar name="gatot" src={item.profile_picture} />
                <Flex flexDirection="column">
                  <Heading size="m">{item.full_name}</Heading>
                  <Text mt={-2} fontSize="12px" textColor="GrayText">
                    @{item.user_name}
                  </Text>
                </Flex>
              </Flex>
              <Button
                boxSize={"fit-content"}
                fontSize={13}
                rounded={15}
                border="2px"
                borderColor={"black"}
                bg={"transparent"}
                alignItems="center"
                onClick={handleFollowers}
              >
                {foll ? "Following" : "Follow"}
              </Button>
            </Flex>
          </Box>
        ))} */}
        {/* <DftrFollowers/>         */}
      </Card>
    </>
  );
};

export default Search;