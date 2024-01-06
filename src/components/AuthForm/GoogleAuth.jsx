import { Flex,Text,Image } from "@chakra-ui/react"

export default function GoogleAuth() {
  return (
    <>
       <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"} gap={2}>
            <Image src="/google.png" alt="google logo" w={5} />
            <Text mx={2} color="blue.500">Log In with Google</Text>
          </Flex>
    </>
  )
}
