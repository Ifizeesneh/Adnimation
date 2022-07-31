import { Box, Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export const Banner3 = () => {
  return (
    <div className="banner">
      <Container maxW="8xl">

      <Heading color={"#FEFEFE"} fontWeight={800} fontSize={["22px", "22px", "22px", "36px"]}>Taking the publisher’s corner</Heading>
      <Box w="100%" h="1px" bg="#333333" my="15px"></Box>
      <Text
            mt="42px"
            color={"#FEFEFE"}
            fontSize={["20px","22px","20px","24px"]}
            lineHeight={1.3}
            fontWeight={300}
              maxWidth="100%"
              pb="32px"
            >
              <Text >
              Increase your earnings, and reduce the noise. As one of our publishers, you can bring your community back into your own hands. We make it easy with our simple suite of services, encompassing such key tasks as revenue analytics, user experience and ad placement.
              </Text>{" "} <br />
              <Text >
              Adnimation is firmly on publishers’ side – working with them, and for them. Unlike other prospective partners that are effectively ad networks, we offer solutions purely to publishers. We sell publishers’ ad space on their behalf, so that they can be sure of getting the very best price – every time.
              </Text>{" "}
             
            </Text>
      </Container>
      </div>
  )
}
