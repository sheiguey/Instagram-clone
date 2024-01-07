import {Input,Button,Alert,AlertIcon,InputRightElement,InputGroup} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import useLogin from "../../Hooks/useLogin";


export default function Login() {

    const [inputs,setInputs]=useState({
        email:"",
        password:"",
      });
      const [showPassWord,setShowPassWord] =useState(false);
    
      const {loading,signIn,error}= useLogin()
      
  return (
      <>
          <Input
              placeholder="Email"
              type="email"
              fontSize={14}
              value={inputs.email}
              onChange={e => setInputs({ ...inputs, email: e.target.value })}
          />
           <InputGroup>
                <Input
                    placeholder="password"
                    type={showPassWord?"text":"password"}
                    fontSize={14}
                    size={"sm"}
                    value={inputs.password}
                    onChange={e => setInputs({ ...inputs, password: e.target.value })}
                />
              <InputRightElement h={'full'}>
                <Button variant={"ghost"} size={"sm"} onClick={()=>setShowPassWord(!showPassWord)}>
                    {showPassWord?<ViewIcon/>:<ViewOffIcon/>}
                </Button>
              </InputRightElement>
            </InputGroup>
           {error &&
              <Alert status='error' fontSize={13} p={2} borderRadius={4}>
              <AlertIcon fontSize={12} />
               {error.message}
            </Alert>
         }
        <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14}  onClick={()=>signIn(inputs)} isLoading={loading}>
          Log in 
        </Button>
      </>
  )
}
