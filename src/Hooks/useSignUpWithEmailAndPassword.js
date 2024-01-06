import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth"
import { auth,db } from "../firebase/firebase";
import { setDoc,doc} from "firebase/firestore";
import useShowToast from "./useShowToast";

export default function useSignUpWithEmailAndPassword() {
   
    const [
        createUserWithEmailAndPassword,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const { displayToast } = useShowToast()
      
      const signup = async(inputs)=>{
        if(!inputs.email || !inputs.username || !inputs.fullName || !inputs.password){
            displayToast("Error","please fill all the field to proceed","error")
            return {}
        }

         try{
           const newUser = await createUserWithEmailAndPassword(inputs.email,inputs.password)
           if(!newUser && error){
            displayToast("Error",error.message,"error")
            return 
           }
           if(newUser){
            const userDoc ={
                uid:newUser.user.uid,
                email:inputs.email,
                username:inputs.username,
                fullName:inputs.fullName,
                bio:"",
                profilePicURL:"",
                followers:[],
                following:[],
                posts:[],
                createdAt: Date.now()
            }
            await setDoc(doc(db,"users",newUser.user.uid),userDoc)
            localStorage.setItem("user-info",JSON.stringify(userDoc))
            displayToast("Success","user created successfully","success")
           }
          
         }
         catch(error){
            displayToast("Error",error.message,"error")
         }
      }

    return {loading,error,signup}
}
