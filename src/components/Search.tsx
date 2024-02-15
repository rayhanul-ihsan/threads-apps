import { Card, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'
import { RiUserSearchLine } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'
import DftrFollowers from './DftrFollowers'

const Search = () => {
  return (
    <>
        <Card p={2} mt={2}  mr={30} w={'100%'}alignItems={'center'} >
            <InputGroup size='md' border={2} borderColor={'black'} rounded={20} gap={1}>
              <NavLink to={''}>
                <InputLeftElement _hover={{color:'gray'}} width='4.5rem'><RiUserSearchLine />
                </InputLeftElement>
              </NavLink>
                <Input
                pr='4.5rem'
                type={'text'}
                placeholder=''
                />
            </InputGroup>
            <DftrFollowers/>        
        </Card>
    </>
  )
}

export default Search