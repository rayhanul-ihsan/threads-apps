import { Card, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'
import { RiUserSearchLine } from 'react-icons/ri'

const Search = () => {
  return (
    <>
        <Card p={2}>
            <InputGroup size='md' border={2} borderColor={'black'} rounded={20} gap={1}>
                <InputLeftElement width='4.5rem'><RiUserSearchLine />
                </InputLeftElement>
                <Input
                pr='4.5rem'
                type={'text'}
                placeholder=''
                />
            </InputGroup>        
        </Card>
    </>
  )
}

export default Search