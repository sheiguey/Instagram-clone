import { Box, Flex } from '@chakra-ui/react'
import Sibar from '../components/Sidebar/Sibar'
import { useLocation } from 'react-router-dom'
import useAuthStore from '../store/auhStore'
import { auth } from '../firebase/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Navbar from '../components/Navbar/NavBar'
import PageLayoutSpinner from '../components/Spinners/PageLayoutSpinner'

export default function PageLayout({children}) {
  const {pathname} = useLocation()
  const [user,loading]= useAuthState(auth)
  const authUser = useAuthStore((state)=>state.user);
  const canRenderNavBar = !user && !loading && pathname!=="/auth";
  const checkIngUserIsAuth= !user && loading;

  if(checkIngUserIsAuth){
    return <PageLayoutSpinner/>
  }
  return (
     <Flex>
        {
            pathname!=="/auth" && user ? (
            <Box w={{base:"70px",md:"240px"}}>
                <Sibar/>
            </Box>
            ):null
        }
       
        <Box flex={1} w={{base:"calc(100%-70px)",md:"calc(100%-240px)"}} mx={"auto"}>
        {
            canRenderNavBar && <Navbar/>
        }
            {children}
        </Box>
     </Flex>
  )
}
