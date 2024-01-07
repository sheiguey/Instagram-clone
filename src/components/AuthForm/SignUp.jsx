import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Button, Input, InputGroup, InputRightElement, Alert,AlertIcon } from "@chakra-ui/react";
import { useState } from "react";
import useSignUpWithEmailAndPassword from "../../Hooks/useSignUpWithEmailAndPassword";


export default function SignUp() {

    const [inputs, setInputs] = useState({
        email: "",
        fullName: "",
        username: "",
        password: "",
    });

    const [showPassWord,setShowPassWord] =useState(false);
    const {loading,error,signup} = useSignUpWithEmailAndPassword();
   

    return (
        <>
            <Input
                placeholder="FullName"
                type="text"
                fontSize={14}
                size={"sm"}
                value={inputs.fullName}
                onChange={e => setInputs({ ...inputs, fullName: e.target.value })}
            />
            <Input
                placeholder="username"
                type="username"
                fontSize={14}
                size={"sm"}
                value={inputs.username}
                onChange={e => setInputs({ ...inputs, username: e.target.value })}
            />
            <Input
                placeholder="Email"
                type="email"
                fontSize={14}
                size={"sm"}
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
            <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14} onClick={()=>signup(inputs)}
              isLoading={loading}
            >
                SignUp
            </Button>

        </>

    )
}
