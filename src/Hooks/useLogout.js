import { useSignOut } from 'react-firebase-hooks/auth';
import useShowToast from './useShowToast';
import useAuthStore from '../store/auhStore';
import { auth } from '../firebase/firebase';

export default function useLogout() {
    const [signOut,isLoginOut] = useSignOut(auth);
    const {displayToast} = useShowToast();
    const logoutUser = useAuthStore((state)=>state.logout)
    async function handleLogout(){
      try{
        await signOut()
        localStorage.removeItem('user-info')
        logoutUser();
      }catch(error){
        displayToast("Error",error.message,"error")
      }
 
    }

    return {isLoginOut,handleLogout}
}
