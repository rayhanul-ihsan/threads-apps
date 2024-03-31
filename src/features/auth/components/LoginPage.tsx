import {
  Button,
  Card,
  Center,
  Icon,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorMode,
  FormControl,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import React from "react";
// import UseLogin from "../hooks/UseLogin";
import { Link, useNavigate } from "react-router-dom";
import { BiMoon, BiSun } from "react-icons/bi";

import { Controller } from "react-hook-form";
import { useLoginValidation } from "../../../validation";
import { API, setAuthToken } from "../../../libs/api";
import { AUTH_LOGIN } from "../../../stores/rootReducer";
import { useDispatch } from "react-redux";

const LoginPage: React.FC = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  // const { handleChange, handleLogin } = UseLogin();
  const { colorMode, toggleColorMode } = useColorMode();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { control, handleSubmit } = useLoginValidation();

  const onSubmit = async (data: { user_name: string; password: string }) => {
    try {
      const res = await API.post("/auth/login", data);
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
      setAuthToken(res.data.token);
      dispatch(AUTH_LOGIN(res.data));
      navigate("/");
    } catch (error) {
      throw error;
    }
  };
  const onError = (errors: any) => {
    console.log(errors);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <Center
          w={{ base: "100%", lg: "100%", xl: "100%" }}
          bg="gray-400"
          h={"100vh"}
          alignItems={"center"}
        >
          <Card
            display={"flex"}
            alignContent={"center"}
            p={4}
            alignItems={"center"}
          >
            <Heading>Toa</Heading>
            <Text fontWeight={"700"}>Login to Toa</Text>
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
                    <InputGroup my={1} size="md" borderColor={"black"}>
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

              {/* <NavLink to={"/login"}>
                <Text
                  fontWeight={"500"}
                  textAlign={"right"}
                  fontSize="10px"
                  color={"#482AE3"}
                  _hover={{ color: "red", cursor: "pointer" }}
                >
                  Forget password?
                </Text>
              </NavLink> */}
            </Flex>
            <Button
              type="submit"
              _hover={{ bg: "#6178D6", color: "black" }}
              mb={1}
              rounded={20}
              bg={"#482AE3"}
              color={"white"}
              w={"250px"}
            >
              Login
            </Button>
            <Flex mb={1}>
              <Text fontWeight={"600"} fontSize="10px" textColor="GrayText">
                Don't have an account?
              </Text>
              <Link to={"/register"}>
                <Text
                  fontWeight={"600"}
                  fontSize="10px"
                  color={"#482AE3"}
                  _hover={{ color: "red", cursor: "pointer" }}
                >
                  Create Account
                </Text>
              </Link>
            </Flex>
          </Card>
        </Center>
      </form>
    </>
  );
};

export default LoginPage;
