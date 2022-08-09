import React from "react"
import { Flex, Box, Text, Container,Button } from "@chakra-ui/react"
export const Banner = () => {
  return (
    <div className="banner">
      <Container maxW="8xl">
        <Flex py={"90px"} px="1rem" direction={["column", "column", "row", "row"]}>
          <Box w={["100%", "100%", "70%", "50%"]}>
            <Text
              color={"#FEFEFE"}
              fontSize={["22px", "22px", "22px", "36px"]}
              lineHeight={1.3}
              fontWeight={600}
              maxWidth="100%"
            >
              <Text>
                Realize the complete revenue potential of your ads on websites
                and mobile.{" "}
              </Text>{" "}
              <br />
              <Text>
                We support publishers with the knowledge, expertise and
                assistance to run their Ad Operations, Site Monetization and yield management
              </Text>
              <br />
            </Text>
          </Box>
          <Box w={["100%", "100%", "70%", "50%"]} ml={["0px","0px","12px","22px"]}
          py={["40px","40px","2px","0px"]}
          >
            <Text
              color={"#FEFEFE"}
              fontSize={["20px","22px","20px","24px"]}
              lineHeight={1.3}
              fontWeight={300}
              maxWidth="100%"
            >
              <Text>
                Optimize your ads, boost revenues, enhance visitor experience
                with better yield management practices, more ad revenue
                channels, third party revenue vendors and tech stacks
              </Text>
            </Text>
            <Button
            borderRadius={"10px"}
            colorScheme="blue"

            // color="#fff"
            width={["120px","","","190px"]}
            mt={["22px","22px","34px","30px"]}
            // fontSize={["","","","22px"]}
            // padding="30px"
            // ml={["0px","0px","244px","0px"]}
            // _hover={{bg:"transparent", border:"2px solid red", color:"red"}}
            
            >Get Started</Button>
          </Box>
        </Flex>
      </Container>
    </div>
  )
}
