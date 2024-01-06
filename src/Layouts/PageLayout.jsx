import { Box, Flex } from '@chakra-ui/react'
import Sibar from '../components/Sidebar/Sibar'
import { useLocation } from 'react-router-dom'
import useAuthStore from '../store/auhStore'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase/firebase'

export default function PageLayout({children}) {
  const {pathname} = useLocation()
  //const {user,loading,error}= useAuthState(auth)
  const authUser = useAuthStore((state)=>state.user);
  return (
     <Flex>
        {
            pathname!=="/auth" && authUser ? (
            <Box w={{base:"70px",md:"240px"}}>
                <Sibar/>
            </Box>
            ):null
        }
        <Box flex={1} w={{base:"calc(100%-70px)",md:"calc(100%-240px)"}}>
            {children}
        </Box>
     </Flex>
  )
}
