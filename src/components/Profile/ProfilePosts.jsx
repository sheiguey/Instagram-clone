import { Box, Grid, Skeleton } from "@chakra-ui/react";
import { useState,useEffect } from "react";
import ProfilePost from "./ProfilePost";

export default function ProfilePosts() {
  const [isLoading,setIsLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
     setIsLoading(false)
    },2000)
  },[])
  return (
    <Grid
     templateColumns={{
      sm:"repeat(1,1fr)",
      md:"repeat(3,1fr)"
    }}
    gap={1}
    columnGap={1}
    >
    {isLoading &&
      [0,1,2,3,4,5].map((_,idx)=>(
        <Skeleton w={"full"}>
          <Box h='300px'> contents wrapped</Box>
        </Skeleton>
      ))
    }

    {!isLoading && (
      <>
      <ProfilePost img="/img1.png" />
      <ProfilePost img="/img2.png" />
      <ProfilePost img="/img3.png" />
      <ProfilePost img="/img4.png" />
      </>
    )

    }
    </Grid>
  )
}
