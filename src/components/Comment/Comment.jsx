import { Avatar, Box,Text, Flex } from '@chakra-ui/react'
import React from 'react'

export default function Comment({createdAt,username,profilePic,text}) {
  return (
    <Flex gap={4}>
     <Avatar src={profilePic}/>
     <Flex  gap={2} flexDirection={"column"}>
      <Text color={"AlphaWite"} fontSize={12}>
        {username}
      </Text>
      <Text color={"gray.500"} fontSize={10}>
        {createdAt}
      </Text>
     </Flex>
     <Box>
        <Text color={"gray.500"} fontSize={12}>
            {text}
        </Text>
     </Box>
    </Flex>
  )
}
