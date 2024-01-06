import {Input,Button} from "@chakra-ui/react";
import { useState } from "react";


export default function Login() {
    
    const [inputs,setInputs]=useState({
        email:"",
        password:"",
      });
      
  return (
      <>
          <Input
              placeholder="Email"
              type="email"
              fontSize={14}
              value={inputs.email}
              onChange={e => setInputs({ ...inputs, email: e.target.value })}
          />
          <Input
              placeholder="password"
              type="password"
              fontSize={14}
              value={inputs.password}
              onChange={e => setInputs({ ...inputs, password: e.target.value })}
          />
        <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14} >
          Log in 
        </Button>
      </>
  )
}
