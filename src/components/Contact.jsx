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
              <Text color={"red"}>Let’s get the band together…</Text>{" "}
            </Text>
            <Text mt="33px" maxW={"90%"} fontSize="22px">
              As a Google Licensed Partner, staffed with seasoned monetization
              experts, we blend advanced technology with human professionalism.
            </Text>
            <Text mt="23px" maxW={"90%"} fontSize="22px">
              How does that manifest in reality? Well, it means that every day,
              our experts review the data, speak with advertisers and exchanges,
              and make improvements for publishers like you. With us, you can
              soon be selling the same ad space on your website for higher
              prices.
            </Text>
            <Text mt="23px" maxW={"90%"} fontSize="22px">
              You’ll get more revenue out of your ads, when you’re able to
              deliver the right ones, when and where you need them. But of
              course, every publisher’s needs are different.
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
               <Text as={"span"} fontWeight="600"> Get started today by contacting our friendly experts.</Text> We’d love
                to chat about how we can serve your most demanding requirements,
                and deliver that Adnimation magic.
              </Text>
            </Text>

            <Input placeholder='Your Name *' size='lg' mt="34px"   bg="#F5F5F5"/>
            <Input placeholder='Your Email *' size='lg' mt="24px"  bg="#F5F5F5"/>
            <Input placeholder='Website URL *' size='lg' mt="24px"  bg="#F5F5F5"/>
            <Input placeholder='Your Phone Number *' size='lg' mt="24px"  bg="#F5F5F5"/>

            <Button
              bg="red"
              borderRadius={"63px"}
              color="#fff"
              width={["190px", "", "", "100%"]}
              mt={["22px", "22px", "34px", "30px"]}
              fontSize={["12px", "", "", "22px"]}
              padding="30px"
              ml={["0px", "0px", "244px", "0px"]}
              _hover={{
                bg: "transparent",
                border: "2px solid red",
                color: "red",
              }}
            >
             CLICK AND WE'LL TALK SOON
            </Button>
            <Text
              color={"#000000"}
              fontSize={["20px", "22px", "20px", "22px"]}
              lineHeight={1.3}
              fontWeight={300}
              maxWidth="100%"
              mt="43px"
            >
              <Text>
               <Text as={"span"} fontWeight="600"> Eager to talk?</Text> <Text as={"span"} fontWeight="600" color="#61C2E9"> Click here to schedule a 15-minutes video call. </Text> We’d be happy to learn more about your monetization needs and offer our professional analysis, no strings attached. You can also contact us through social and email.
              </Text>
            </Text>
            <Flex   fontSize={30} mt ="22px"> <Box><BsFacebook /></Box>  <Box ml="13px"><RiVideoFill  /></Box> <Box ml="13px"><MdOutlineEmail /></Box></Flex>
          </Box>
        </Flex>
      </Container>
    </div>
  )
}
