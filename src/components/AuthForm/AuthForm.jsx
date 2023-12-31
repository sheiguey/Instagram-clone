import { Box, Button, Flex, Image, Input, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthForm() {

  const [isLogin,setIsLogin]=useState(true);
  const navigate =useNavigate();
  const [inputs,setInputs]=useState({
    email:"",
    password:"",
    confirmPassWord:""
  });
  
 const handleAuth=()=>{
   if(!inputs.email | !inputs.password){
     alert("please fill all the inputs")
   }
   console.log(inputs);
   navigate("/")
 }
  return (
    <>
     <Box border={"1px solid gray"} borderRadius={5} padding={5}>
      <VStack spacing={4}>
        <Image src="/logo.png" h={24} cursor={"pointer"} alt="instagram"/>
        <Input 
         placeholder="Email"
         type="email"
         fontSize={14}
         value={inputs.email}
         onChange={e=>setInputs({...inputs,email:e.target.value})}
        />
        <Input 
         placeholder="password"
         type="password"
         fontSize={14}
         value={inputs.password}
         onChange={e=>setInputs({...inputs,password:e.target.value})}
        />
        {!isLogin ?
        <Input 
        placeholder="confirm password" 
        type="password" 
        fontSize={14}
        value={inputs.confirmPassWord}
        onChange={e=>setInputs({...inputs,confirmPassWord:e.target.value})}
        />:null }

        <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14} onClick={()=>handleAuth()}>
         {isLogin? "Log in":"Sign up"}
        </Button>

        <Flex justifyContent={"center"} alignItems={"center"} my={4} gap={1} w={"full"}>
          <Box flex={2} h={"1px"} bg={"gray.400"} />
          <Text mx={1} color="white">OR</Text>
          <Box flex={2} h={"1px"} bg={"gray.400"} />
        </Flex>

          <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"} gap={2}>
            <Image src="/google.png" alt="google logo" w={5} />
            <Text mx={2} color="blue.500">Log In with Google</Text>
          </Flex>
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
