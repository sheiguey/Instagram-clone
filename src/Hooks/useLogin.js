import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase/firebase';
import { doc,getDoc } from 'firebase/firestore';
import useShowToast from './useShowToast';
import useAuthStore from '../store/auhStore';


export default function useLogin() {
    const {displayToast} = useShowToast()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const userLogin = useAuthStore((state)=>state.login);

    async function signIn(inputs){
        if(!inputs.email || !inputs.password){
          displayToast("Error","Please fill all the fields","error");
        }
        try{
          const userCred = await signInWithEmailAndPassword(inputs.email,inputs.password);
          if(userCred){
            const userRef = doc(db,'users',userCred.user.uid);
            const docSnap = await getDoc(userRef);
            localStorage.setItem('user-info',JSON.stringify(docSnap.data()));
            userLogin(docSnap.data())
            
          }
        }catch(error){
            displayToast("Error",error.message,"error")
        }
    }
    return {loading,error,signIn}
}
