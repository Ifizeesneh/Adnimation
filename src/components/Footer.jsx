import React from 'react'
import { Flex, Box, Text, Container,Button, Heading } from "@chakra-ui/react"
import { BsFacebook } from 'react-icons/bs';
import { RiVideoFill } from 'react-icons/ri';
import { MdOutlineEmail } from 'react-icons/md';

export const Footer = () => {
  return (
    <div className="banner4">
      <Container maxW="8xl">
      <Box w="100%" h="1.9px" bg="#333333" my="35px"></Box>
        <Flex py={"90px"} direction={["column", "column", "row", "row"]}
        justifyContent="space-between">
         <Flex direction={"column"} maxWidth="25%"><Heading>ABOUT</Heading>
         <Text fontSize={"22px"} mt="30px">Work with us, and we’ll empower you to get the best results from the only business model that works for the vast majority of websites: ad-supported content.</Text>
         
         <Button bg="red"
            borderRadius={"23px"}
            color="#fff"
            width={["120px","","","150px"]}
            mt={["22px","22px","34px","30px"]}
            fontSize={["","","","18px"]}
            padding="25px"
            ml={["0px","0px","244px","0px"]}
            _hover={{bg:"transparent", border:"2px solid red", color:"red"}}
            
            >READ MORE</Button>
         
         </Flex>
         <Flex direction={"column"}><Heading>SERVICES</Heading>
           <Flex direction={"column"} mt="30px" fontSize={"22px"}>
            <Text>Websites Ads Monetization</Text>
            <Text>Site speed optimization</Text>
            <Text>Dynamic loading ads</Text>
            <Text>Direct campaigns</Text>
            <Text>Revenue analytics</Text>
            <Text>Header bidding</Text>
            <Text>Ad revenue safety</Text>
            <Text>Ad revenue safety</Text>
           </Flex>
         
         </Flex>
         <Flex direction={"column"}><Heading>COMPANY</Heading>
           <Flex direction={"column"} mt="30px" fontSize={"22px"}>
            <Text>About</Text>
            <Text>Success</Text>
            <Text>Partners</Text>
            <Text>Privacy Policy</Text>
            <Text>Contact</Text>
            
           </Flex>
         
         </Flex>
         <Flex direction={"column"}  maxWidth="25%"><Heading>CONNECT</Heading>
         <Text  mt="30px" fontSize={"22px"}>Shoot us an email and let’s talk: support@adnimation.com</Text>
         <Flex   fontSize={30} mt ="22px"> <Box><BsFacebook /></Box>  <Box ml="13px"><RiVideoFill  /></Box> <Box ml="13px"><MdOutlineEmail /></Box></Flex>
         </Flex>
        </Flex>
      </Container>
    </div>
  )
}
