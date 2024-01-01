import { Container } from '@chakra-ui/react'
import React from 'react'
import FeedPost from './FeedPost'

export default function FeedPosts() {
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
        <FeedPost img='/img1.png' username="chacha" avatar="/img1.png"/>
        <FeedPost img='/img2.png' username="sheiguey" avatar="/img2.png"/>
        <FeedPost img='/img3.png' username="lefeu" avatar="/img3.png"/>
        <FeedPost img='/img4.png' username="ekeh" avatar="/img4.png"/>
    </Container>
  )
}
