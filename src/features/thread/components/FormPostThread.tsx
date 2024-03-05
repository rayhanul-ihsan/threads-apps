import React, { useEffect } from 'react'
import { Avatar, Card, Button, Flex, Heading, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { LuImagePlus } from "react-icons/lu";
import { HiSpeakerphone } from "react-icons/hi";
import { NavLink } from 'react-router-dom';
import PostThread from '../hooks/PostThread';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../stores/types/rootState';
import { AUTH_CHECK } from '../../../stores/rootReducer';

 
const FormPostThread: React.FC = () => {
  const { handleChange, handleSubmit, handleChangeFile } = PostThread();

  // auth
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const stroreAuthData = localStorage.getItem("auth");
    if (stroreAuthData) {
      const parseAuthData = JSON.parse(stroreAuthData);
      dispatch(
        AUTH_CHECK({
          user: parseAuthData,
        })
      );
    }
  }, [dispatch, auth]);
  // auth

  return (
    <>
      <form
        encType='multipart/form-data'
        onSubmit={handleSubmit}>
        <Card w={'100%'} bg={'transparent'} _hover={{bg:'#E5E5E5'}}>
          <Flex justifyContent={'center'}>
            <NavLink to={'/'}>
              <Heading _hover={{color:'black', cursor:'pointer'}} fontSize='30px' color={'#482AE3'} m={2}>
                <HiSpeakerphone />
              </Heading>
            </NavLink>

          </Flex>      
          <Flex gap={1}  p={2}>
              <Avatar name='gatot' src={
                auth.profile_picture
                  ? auth.profile_picture
                  : "https://i.ibb.co/xmP2pS6/Profile.png"
                }/>
              <Input placeholder='What is happening?!' name='content' onChange={handleChange} />
              <Flex>
                <InputGroup >
                  <InputLeftElement pointerEvents={'none'}>
                    <LuImagePlus size={30} color='#482AE3' />
                  </InputLeftElement>
                  <Input 
                    cursor={'pointer'}
                    w={"2px"}
                    type='file'
                    opacity={0}
                    name='image'
                    onChange={handleChangeFile} />
                </InputGroup>
                <Button type='submit' _hover={{bg:'#6178D6', color:'black'}} rounded={20} color='white' bg='#482AE3' >
                  Post
                </Button>
              </Flex>
          </Flex>
        </Card>
      </form>
    </>
  )
}

export default FormPostThread