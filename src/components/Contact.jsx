import React from "react"
import { Flex, Box, Text, Container, Button } from "@chakra-ui/react"
import { BsFacebook } from 'react-icons/bs';
import { RiVideoFill } from 'react-icons/ri';
import { MdOutlineEmail } from 'react-icons/md';
import { Input } from '@chakra-ui/react'


export const Contact = () => {
  return (
    <div className="banner4">
      <Container maxW="8xl">
        <Flex py={"90px"} direction={["column", "column", "row", "row"]}>
          <Box w={["100%", "100%", "70%", "60%"]}>
            <Text
              color={"#000000"}
              fontSize={["22px", "22px", "22px", "66px"]}
              lineHeight={0.9}
              fontWeight={700}
              maxWidth="100%"
            >
              <Text color={"dodgerblue"}>TESTIMONIALS</Text>{" "}
            </Text>
            <Text mt="33px" maxW={"90%"} fontSize="18px">
            We have been using Advertising Ops since 2017 and its been our best decision so far. We have seen our revenues triple. The team has gone above and beyond our expectations, which allows us to be more efficient and focus on other parts of our business. 
            <Text color={"dodgerblue"} mt={2} fontSize="16px" fontWeight="600">- Moritz Boullenger, MD Pulse Africa.</Text>
            </Text>
            <Text mt="33px" maxW={"90%"} fontSize="18px">
            The team at Advertising Ops helped set up our adserver and ad units configuration for Business Insider Africa. Continous monitoring, ad trafficking and revenue monetization of our inventories. Tehey are a critical part of our business.
            <Text color={"dodgerblue"} mt={2} fontSize="16px" fontWeight="600">- Victor Oluwole, Head Editor, Business Insider Africa</Text>
            </Text>
            <Text mt="33px" maxW={"90%"} fontSize="18px">
            Advertising Ops is a crucial part of our Trusted Marketplace due to their focus on quality media solutions, coupled with exceptional service and best pracitices on ad delivery.
            <Text color={"dodgerblue"} mt={2} fontSize="16px" fontWeight="600">- Ekechi Iheanyichukwu, Senior Programmatic Executive, Amnet Group</Text>
            </Text>
            <Text mt="33px" maxW={"90%"} fontSize="18px">
            We trust the inventory we buy through Advertising Ops. We are assured of brand safety, zero tolerance to ad fraud and viewability of at least 65% on all campaigns trafficked through the team.
            <Text color={"dodgerblue"} mt={2} fontSize="16px" fontWeight="600">- Adaora Odufuwa, Business Lead, Digital Services, DigitXplus</Text>
            </Text>

          </Box>
          <Box
            w={["100%", "100%", "70%", "50%"]}
            ml={["0px", "0px", "12px", "22px"]}
            py={["40px", "40px", "2px", "0px"]}
          >
            <Text
              color={"#000000"}
              fontSize={["20px", "22px", "20px", "24px"]}
              lineHeight={1.3}
              fontWeight={300}
              maxWidth="100%"
            >
              <Text>
               <Text as={"span"} fontWeight="600">REACH OUT TO US</Text> 
              </Text>
            </Text>

            <Input placeholder='Your Name *' size='lg' mt="34px"   bg="#F5F5F5"/>
            <Input placeholder='Your Email *' size='lg' mt="24px"  bg="#F5F5F5"/>
            <Input placeholder='Website URL *' size='lg' mt="24px"  bg="#F5F5F5"/>
            <Input placeholder='Your Phone Number *' size='lg' mt="24px"  bg="#F5F5F5"/>

            <Button
              colorScheme="blue"
              borderRadius={"16px"}
              // color="#fff"
              // width={["190px", "", "", "100%"]}
              mt={["22px", "22px", "34px", "30px"]}
              // fontSize={["12px", "", "", "22px"]}
              // padding="30px"
              // ml={["0px", "0px", "244px", "0px"]}
              _hover={{
                bg: "transparent",
                border: "2px solid blue",
                color: "red",
              }}
            >
             CLICK AND WE'LL TALK SOON
            </Button>
            
            {/* <Flex   fontSize={30} mt ="22px"> <Box><BsFacebook /></Box>  <Box ml="13px"><RiVideoFill  /></Box> <Box ml="13px"><MdOutlineEmail /></Box></Flex> */}
          </Box>
        </Flex>
      </Container>
    </div>
  )
}
