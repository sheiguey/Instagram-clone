import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth"
import { auth,db } from "../firebase/firebase";
import { setDoc,doc,collection,getDocs,query,where} from "firebase/firestore";
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
        
        const usersRef = collection(db,"users");
        const q = query(usersRef,where("username","==",inputs.username));
        const querySnapShot= await getDocs(q);

        if(!querySnapShot.empty){
          return  displayToast("UserName","username already exists","error");
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
