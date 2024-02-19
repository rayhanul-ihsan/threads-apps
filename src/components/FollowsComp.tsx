import {Box, 
        Card, 
        Heading, 
        Tab, 
        TabList, 
        TabPanel, 
        TabPanels, 
        Tabs } 
from '@chakra-ui/react'
import React from 'react'
import DftrFollowers from './DftrFollowers'
import DftrFollowing from './DftrFollowing'

const FollowsComp: React.FC = () => {
  return (
    <>
      <Box>
        <Card p={2} w={'100%'}>
         <Heading  fontSize='23px' gap={2} mb={6} >
            Follows
         </Heading>
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
                <DftrFollowing/>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>
      </Box>
    </>
  )
}

export default FollowsComp