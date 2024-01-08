import { Flex,Text,Image } from "@chakra-ui/react"
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth,db } from "../../firebase/firebase";
import { doc,setDoc } from "firebase/firestore";
import useShowToast from "../../Hooks/useShowToast";
import useAuthStore from "../../store/auhStore";

export default function GoogleAuth({prefix}) {
  const [signInWithGoogle, error] = useSignInWithGoogle(auth);
  const {displayToast} = useShowToast();
  const loginUser = useAuthStore((state)=>state.login);

   async function googleAuth(){
    try{
     const newUser = await signInWithGoogle();
     if(!newUser && error){
      displayToast("Error",error.message,"success");
     }

     if(newUser){
      const userDoc ={
        uid:newUser.user.uid,
        email:newUser.user.email,
        username:newUser.user.email.split("@")[0],
        fullName:newUser.user.displayName,
        bio:"",
        profilePicURL:newUser.user.photoURL,
        followers:[],
        following:[],
        posts:[],
        createdAt: Date.now()
    }
    await setDoc(doc(db,"users",newUser.user.uid),userDoc);
    localStorage.setItem("user-info",JSON.stringify(userDoc));
    displayToast("Success","user created successfully","success");
    loginUser(userDoc)
    }
    }catch(error){
      displayToast("Error",error.message,"error");
    }
  }

  return (
    <>
       <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"} gap={2} onClick={()=>googleAuth()}>
            <Image src="/google.png" alt="google logo" w={5} />
            <Text mx={2} color="blue.500">{prefix} with Google</Text>
        </Flex>
    </>
  )
}
