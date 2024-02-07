import { Box, Card, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import DftrFollowers from './dftrFollowers'

const FollowsComp: React.FC = () => {
  return (
    <>
      <Box>
        <Card p={2} w={500}>
         <Heading  fontSize='23px' gap={2} mb={6} >
            Follows
         </Heading>
         <Flex justifyContent={'space-around'}>
          {/* <NavLink to={'/dftr-followers'}>
          </NavLink> */}
            <Text _active={{textDecoration: 'underline', color: 'blue'}} _hover={{cursor: 'pointer', color: 'gray'}} fontWeight={'500'}>
                Followers
            </Text>
            <Text _hover={{cursor: 'pointer', color: 'gray'}} fontWeight={'500'}>
                Following
            </Text>
         </Flex>
        </Card>
      </Box>
    </>
  )
}

export default FollowsComp