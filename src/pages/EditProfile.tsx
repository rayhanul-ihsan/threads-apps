import { Button, Card, Center, Flex, Heading, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { RootState } from '../stores/types/rootState'
interface IEditProfile {
    image_cover: File | null,
    profile_picture: File | null,
    bio: string
}
const EditProfile: React.FC = () => {
    // const [show, setShow] = React.useState(false)
    // const handleClick = () => setShow(!show)

    // const [users, setUsers] = useState<any>('');
    // const [image_cover, setImage_cover] = useState<any>('');
    // const [profile_picture, setProfile_picture] = useState<any>('');
    // const [bio, setBio] = useState<any>('');
    // const [error, setError] = useState('');
    const token = localStorage.getItem('token')
    const auth = useSelector((state: RootState) => state.auth)

    console.log("ini auth",auth)
    // useEffect(() => {
        //     axios
        //       .patch(`http://localhost:5000/api/v1/user/:${id}`, , {headers:{Authorization: `Bearer ${token}`}})
        //       .then((res) => setUsers(res.data))
        //       .catch(err => {
    //        setError(err.message);
    //   });
    //   }, []);

    const [data , setData] = useState<IEditProfile>({
        image_cover: null,
        profile_picture: null,
        bio: ''
    });

      const handleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData((prev) => ({ ...prev, bio: e.target.value }));
      }
      const handleImageCover = (e: React.ChangeEvent<HTMLInputElement>) => {
          setData((prev) => ({ ...prev, image_cover: e.target.files![0] }));
      }
      const handleImageProfile = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData((prev) => ({ ...prev, profile_picture: e.target.files![0] }));
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:5000/api/v1/user/${auth.id}`, data,
             {
                headers:{Authorization: `Bearer ${token}` , "Content-Type": "multipart/form-data"}
            })

            // console.log(data)
            console.log(response)
            
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <>
      <Center w={{base:'100%',lg:'100%',xl:'100%'}} bg='black' h={'100vh'} alignItems={"center"}>
        <form onSubmit={handleSubmit}>

            <Card display={'flex'}  alignContent={'center'} p={6} alignItems={"center"}>
                <Heading>
                    Edit Profile
                </Heading>
                <Flex flexDirection={'column'} my={2}>
                    <Input my={1} placeholder='image_cover' name='image_cover' type='file' borderColor={'black'} onChange={handleImageCover}/>
                    <Input my={1} placeholder='profile_picture' name='profile_picture' type='file' borderColor={'black'} onChange={handleImageProfile} />
                    <Input my={1} placeholder='Bio' name='bio' borderColor={'black'}  onChange={handleEdit}/>
                   
                </Flex>
                <Flex justifyContent={'space-around'} w={'full'}>
                    <Button _hover={{bg:'#6178D6', color:'black'}} mb={1} rounded={10} bg={'#482AE3'} color={'white'} type='submit'>
                        Submit
                    </Button>
                    <NavLink to={'/detail-profile'}>
                    <Button _hover={{bg:'#6178D6', color:'black'}} mb={1} rounded={10} bg={'#482AE3'} color={'white'}>
                        Cancel
                    </Button>
                    </NavLink>
                </Flex>
                {/* <Flex mb={1}>
                    <Text fontWeight={'600'} fontSize='10px'  textColor='GrayText'>
                    Don't have an account?
                    </Text>
                    <NavLink to={'/register'}>
                    <Text fontWeight={'600'} fontSize='10px' color={'#482AE3'} _hover={{color: 'red', cursor: 'pointer'}}>
                    Create Account
                    </Text>
                    </NavLink>
                </Flex> */}
            </Card>
            </form>
        </Center>  
    </>
  )
}

export default EditProfile

