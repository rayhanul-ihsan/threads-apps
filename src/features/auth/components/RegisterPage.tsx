import React from "react";

import {
  Button,
  Card,
  Center,
  Flex,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorMode,
  FormControl,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
// import UseRegister from "../hooks/UseRegister";
import { BiMoon, BiSun } from "react-icons/bi";

import { Controller } from "react-hook-form";
import { useRegisterValidation } from "../../../validation";
import { API, setAuthToken } from "../../../libs/api";

const RegisterPage: React.FC = () => {
  const handleClick = () => setShow(!show);
  const [show, setShow] = React.useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
//   const { handleChange, handleRegister } = UseRegister();

  const navigate = useNavigate();
  const { control, handleSubmit } = useRegisterValidation();

  const onSubmit = async (data: { full_name: string; user_name: string; email: string; password: string }) => {
      try {
        const res = await API.post("/auth/register", data);
        console.log(res.data);
        navigate("/login");
      } catch (error) {
        throw error;
      }
  }

  const onError = (errors: any) => {
    console.log(errors);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <Center
          w={{ base: "100%", lg: "100%", xl: "100%" }}
          h={"100vh"}
          bg="gray-600"
          alignItems={"center"}
        >
          <Card
            display={"flex"}
            alignContent={"center"}
            p={4}
            alignItems={"center"}
          >
            <Heading>Toa</Heading>
            <Text>Create account Toa</Text>
            <Button
              onClick={toggleColorMode}
              bg={"transparent"}
              p={2}
              rounded={"full"}
              _hover={{ bg: "transparent" }}
            >
              <Icon as={colorMode === "dark" ? BiMoon : BiSun} />
            </Button>
            <Flex flexDirection={"column"} my={2}>
              <Controller
                name="full_name"
                control={control}
                render={({ field, fieldState }) => (
                  <FormControl isInvalid={!!fieldState.error?.message}>
                    <Input
                      
                      placeholder="Full_Name*"
                      name="full_name"
                      borderColor={"black"}
                      onChange={field.onChange}
                      value={field.value}
                      onBlur={field.onBlur}
                    />
                    {!!fieldState.error?.message ? (
                      <FormErrorMessage>
                        {fieldState.error?.message}
                      </FormErrorMessage>
                    ) : (
                      <FormHelperText>
                        We'll never share your fullName.
                      </FormHelperText>
                    )}
                  </FormControl>
                )}
              />
              <Controller
                name="user_name"
                control={control}
                render={({ field, fieldState }) => (
                  <FormControl isInvalid={!!fieldState.error?.message}>
                    <Input
                      placeholder="Username*"
                      name="user_name"
                      type={"user_name"}
                      borderColor={"black"}
                      onChange={field.onChange}
                      value={field.value}
                      onBlur={field.onBlur}
                    />
                    {!!fieldState.error?.message ? (
                      <FormErrorMessage>
                        {fieldState.error?.message}
                      </FormErrorMessage>
                    ) : (
                      <FormHelperText>
                        We'll never share your username.
                      </FormHelperText>
                    )}
                  </FormControl>
                )}
              />
              <Controller
                name="email"
                control={control}
                render={({ field, fieldState }) => (
                  <FormControl isInvalid={!!fieldState.error?.message}>
                    <Input
                      placeholder="email*"
                      name="email"
                      type={"email"}
                      borderColor={"black"}
                      onChange={field.onChange}
                      value={field.value}
                      onBlur={field.onBlur}
                    />
                    {!!fieldState.error?.message ? (
                      <FormErrorMessage>
                        {fieldState.error?.message}
                      </FormErrorMessage>
                    ) : (
                      <FormHelperText>
                        We'll never share your email.
                      </FormHelperText>
                    )}
                  </FormControl>
                )}
              />
              <Controller
                name="password"
                control={control}
                render={({ field, fieldState }) => (
                  <FormControl isInvalid={!!fieldState.error?.message}>
                    <InputGroup  size="md" borderColor={"black"}>
                      <Input
                        pr="4.5rem"
                        // name="Password"
                        type={show ? "text" : "password"}
                        placeholder="Password"
                        {...field}
                      />
                      <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                          {show ? "Hide" : "Show"}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    {!!fieldState.error?.message && (
                      <FormErrorMessage>
                        {fieldState.error?.message}
                      </FormErrorMessage>
                    )}
                  </FormControl>
                )}
              />
            </Flex>
            <Button
              type="submit"
              _hover={{ bg: "#6178D6", color: "black" }}
              mb={1}
              rounded={20}
              bg={"#482AE3"}
              color={"white"}
              w={"full"}
            >
              Submit
            </Button>
            <Flex mb={1}>
              <Text fontSize="10px" textColor="GrayText">
                Already have account?
              </Text>
              <NavLink to={"/login"}>
                <Text
                  fontSize="10px"
                  color={"#482AE3"}
                  _hover={{ color: "green", cursor: "pointer" }}
                >
                  Login
                </Text>
              </NavLink>
            </Flex>
          </Card>
        </Center>
      </form>
    </>
  );
};

export default RegisterPage;
