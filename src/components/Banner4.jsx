import React from 'react'
import { Flex, Box, Text, Container,Button } from "@chakra-ui/react"
export const Banner4 = () => {
  return (
    <div className="banner4">
      <Container maxW="8xl">
        <Flex py={"90px"} direction={["column", "column", "row", "row"]}>
          <Box w={["100%", "100%", "70%", "50%"]}>
            <Text
              color={"#000000"}
              fontSize={["22px", "22px", "22px", "66px"]}
              lineHeight={0.9}
              fontWeight={700}
              maxWidth="100%"
            >
              <Text>
              We can deliver you quick and seriously impressive results
              </Text>{" "}
             
            </Text>
          </Box>
          <Box w={["100%", "100%", "70%", "50%"]} ml={["0px","0px","12px","22px"]}
          py={["40px","40px","2px","0px"]}
          >
            <Text
              color={"#000000"}
              fontSize={["20px","22px","20px","24px"]}
              lineHeight={1.3}
              fontWeight={300}
              maxWidth="100%"
            >
              <Text>
              Would you like to see real-life case studies boasting 150% revenue increases? Of course you do – what publisher wouldn’t? Hit the button below to get the lowdown on the story of just one of our clients.
              </Text>
            </Text>
            <Button bg="red"
            borderRadius={"23px"}
            color="#fff"
            width={["190px","","","290px"]}
            mt={["22px","22px","34px","30px"]}
            fontSize={["12px","","","22px"]}
            padding="30px"
            ml={["0px","0px","244px","0px"]}
            _hover={{bg:"transparent", border:"2px solid red", color:"red"}}
            
            >DOWNLOAD CASE-STUDY</Button>
          </Box>
        </Flex>
      </Container>
    </div>
  )
}
