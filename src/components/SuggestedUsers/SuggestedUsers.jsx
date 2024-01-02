import React from 'react'
import SuggestedUser from './SuggestedUser'
import { Flex, VStack,Text,Box,Link } from '@chakra-ui/react'
import SuggestedHeader from './SuggestedHeader'

export default function SuggestedUsers() {
  return (
    <VStack py={8} px={6} gap={4}>
     <SuggestedHeader/>
     <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
      <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
        Suggested for you
      </Text>
      <Text fontSize={12} fontWeight={"bold"} _hover={{color:"gray.400"}} cursor={"pointer"}>
        See All
      </Text>
     </Flex>
     <SuggestedUser  name='Leonel shiti' followers={1255} avatar='' />
     <SuggestedUser  name='Andrei Neagoie' followers={5624} avatar=''/>
     <SuggestedUser  name='Mo binni' followers={3565} avatar=''/>
     <SuggestedUser  name='maximilian schwarzmülle' followers={7562} avatar=''/>
     <SuggestedUser  name='Per Gerald' followers={1255} avatar=''/>
     <SuggestedUser  name='Bob Ziroll' followers={1255} avatar=''/>
     <Box
      fontSize={12}
      color={"gray.500"}
      mt={5}
      alignSelf={"start"}
     >
     &copy; 2024 Built By {" "}
     <Link href='https://franky-shiti-en.netlify.app/' target='_blank' color='blue.500' fontSize={14}>
       Franky Shiti
     </Link>
     </Box>
    </VStack>
  )
}
