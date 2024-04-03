import React from 'react';

import { AiOutlineHeart } from "react-icons/ai";
import { BiSolidHomeAlt2 } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { RiUserSearchLine } from "react-icons/ri";
import { NavLink } from 'react-router-dom';

import { Button, Card, Flex, Spacer } from '@chakra-ui/react';

const NavbarComp :React.FC = () => {


  return (
    <>
    {/* <Card bg={'white'}> */}

    <Flex display={{base:'blok', md:'none'}} w={'100%'} direction='row' justifyContent={'center'} height='100vh'   >
      <Spacer/>
      <Card flexDirection={'row'} justifyContent={'space-evenly'} flexWrap={'wrap'}>
          <NavLink to={'/'}>
            <Button 
              _hover={{ bg: 'white', color: 'gray'}} 
              bg='white'>
              <BiSolidHomeAlt2 size={25} />
            </Button>
          </NavLink>
          <NavLink to={'/search'}>
            <Button 
              _hover={{ bg: 'white', color: 'gray'}} 
              bg='white'>
              <RiUserSearchLine size={25}/>
            </Button>
          </NavLink>
        <NavLink to={'/follows'}>
          <Button 
            _hover={{ bg: 'white', color: 'gray'}} 
            bg='white'>
            <AiOutlineHeart size={25}  />
          </Button>
        </NavLink>
        <NavLink to={'/detail-profile'}>
          <Button 
            _hover={{ bg: 'white', color: 'gray'}} 
            bg='white'>
            <CgProfile size={25}/>
          </Button>
        </NavLink>
      </Card>
    </Flex>
    {/* </Card> */}
    </>
  )
}

export default NavbarComp