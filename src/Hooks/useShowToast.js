import { useToast } from "@chakra-ui/react";

export default function useShowToast() {
    const toast = useToast()

    function displayToast(title,description,status){
        return toast({
            title: title,
            description: description,
            status: status,
            duration: 3000,
            isClosable: true,
          })
    }
   
    return {displayToast}
}
