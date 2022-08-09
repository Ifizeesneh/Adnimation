import React from "react"
import { Flex, Box, Text, Container,Button, Heading } from "@chakra-ui/react"
export const Banner2 = () => {
  return (
    <div className="banner">
      <Container maxW="8xl">
        <Flex py={"90px"} direction={["column", "column", "row", "row"]}>
          <Box w={["100%", "100%", "70%", "70%"]}>
            <Heading color={"#FEFEFE"} fontWeight={800} fontSize={["22px", "22px", "22px", "36px"]}>Reshaping your ad testing approach</Heading>
            <Box w="80%" h="1.9px" bg="#333333" my="15px"></Box>
            <Text
            mt="42px"
            color={"#FEFEFE"}
            fontSize={["20px","22px","20px","24px"]}
            lineHeight={1.3}
            fontWeight={300}
              maxWidth="100%"
            >
              <Text >
              Don’t accept just any old ad placement testing, when there’s Adnimation testing. Our unique computer-learning algorithm places your ads where they need to be, when they need to be there.
              </Text>{" "}
             
            </Text>
          </Box>
          <Box w={["100%", "100%", "70%", "50%"]} ml={["0px","0px","12px","22px"]}
          py={["40px","40px","2px","0px"]}
          >
             <Heading color={"#FEFEFE"} fontWeight={800} fontSize={["22px", "22px", "22px", "36px"]}>EARN MORE WITH LESS ADS</Heading>
             <Box w="90%" h="1.9px" bg="#333333" my="15px"></Box>
            <Text
             mt="42px"
              color={"#FEFEFE"}
              fontSize={["20px","22px","20px","24px"]}
              lineHeight={1.3}
              fontWeight={300}
              maxWidth="100%"
            >
              <Text>
              Our programmatic preferred deals and programmatic guaranteed deals assure you of a higher eCPM. You may not need to have as many ads as you think. You are assured of about $1 - $4 CPMs.
              </Text>
            </Text>
            {/* <Button bg="red"
            borderRadius={"23px"}
            color="#fff"
            width={["120px","","","190px"]}
            mt={["22px","22px","34px","30px"]}
            fontSize={["","","","22px"]}
            padding="30px"
            ml={["0px","0px","244px","0px"]}
            _hover={{bg:"transparent", border:"2px solid red", color:"red"}}
            
            >WATCH NOW</Button> */}
          </Box>
        </Flex>
      </Container>
    </div>
  )
}
