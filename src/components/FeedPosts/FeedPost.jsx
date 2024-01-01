import { Box, Container, Flex } from '@chakra-ui/react'
import React from 'react'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'

export default function FeedPost({img,username,avatar}) {
  return (
    <>
          <PostHeader username={username} avatar={avatar}/>
            <Box 
            my={2}
            borderRadius="4px"
            overflow={'hidden'}
            >
                <img src={img} alt={username} />
            </Box>
          <PostFooter username={username} />
    </>
  )
}
