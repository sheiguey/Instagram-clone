import { Box, Flex, Image,Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import GoogleAuth from "./GoogleAuth";


export default function AuthForm() {
  const [isLogin,setIsLogin]=useState(true);
  const pathname = useLocation()

  return (
    <>
     <Box border={"1px solid gray"} borderRadius={5} padding={5}>
      <VStack spacing={4}>
        <Image src="/logo.png" h={24} cursor={"pointer"} alt="instagram"/>
        
        {isLogin?<Login />: <SignUp />} 

        <Flex justifyContent={"center"} alignItems={"center"} my={4} gap={1} w={"full"}>
          <Box flex={2} h={"1px"} bg={"gray.400"} />
          <Text mx={1} color="white">OR</Text>
          <Box flex={2} h={"1px"} bg={"gray.400"} />
        </Flex>

        <GoogleAuth/>
      </VStack>
     </Box>

     <Box border={"1px solid gray"} borderRadius={4} padding={5}>
       <Flex alignItems={"center"} justifyContent={"center"} gap={2}>
         <Box fontSize={14}>
           {isLogin? "Don't have an account?":"Already have an account?"}
         </Box>
         <Box onClick={()=>setIsLogin((isLogin)=>!isLogin)} color={"blue.500"} cursor={"pointer"}>
           {isLogin? "Sign UP": "Log in"}
         </Box>
       </Flex> 
     </Box>
    </>
  )
}
