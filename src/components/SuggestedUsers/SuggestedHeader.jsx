import { Avatar, Text, Flex , Button} from "@chakra-ui/react";
import useLogout from "../../Hooks/useLogout";
import useAuthStore from "../../store/auhStore";
import { Link } from "react-router-dom";

export default function SuggestedHeader() {
  const {isLoginOut,handleLogout}=useLogout();
  const authUser = useAuthStore((state)=>state.user);

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
      <Link to={`${authUser.username}`}>
      <Avatar size={"lg"} src={authUser.profilePicURL}/>
      </Link>
      <Link to={`${authUser.username}`}>
         <Text fontSize={12} fontWeight={"bold"}>
            {authUser.username}
         </Text>
      </Link>
      </Flex>
      <Button
      fontSize={14}
      fontWeight={"meduim"}
      color={"blue.400"}
      style={{textDecoration:"none"}}
      cursor={"pointer"}
      onClick={handleLogout}
      isLoading={isLoginOut}
      >
      Log out
      </Button>
    </Flex>
  )
}
