import { Box, Card, Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React from 'react'
import DftrFollowers from './DftrFollowers'

const FollowsComp: React.FC = () => {
  return (
    <>
      <Box>
        <Card p={2} w={'100%'}>
         <Heading  fontSize='23px' gap={2} mb={6} >
            Follows
         </Heading>
         {/* <Flex justifyContent={'space-around'}>
          </Flex> display={'flex'} justifyContent={'space-between'} */}
          <Tabs isFitted> 
            <TabList>
              <Tab>
                Followers
              </Tab>
              <Tab>
                Following
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
              <DftrFollowers/>
              </TabPanel>
              <TabPanel>
              {/* <DftrFollowers/> */}
              </TabPanel>
            </TabPanels>
          </Tabs>
            {/* <Text _active={{textDecoration: 'underline', color: 'blue'}} _hover={{cursor: 'pointer', color: 'gray'}} fontWeight={'500'}>
                Followers
            </Text>
            <Text _hover={{cursor: 'pointer', color: 'gray'}} fontWeight={'500'}>
                Following
            </Text> */}
        </Card>
      </Box>
    </>
  )
}

export default FollowsComp