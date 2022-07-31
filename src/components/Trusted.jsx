import { Box, Flex, Heading } from "@chakra-ui/react"
import React from "react"
import Marquee from "react-fast-marquee"
import pulseNG from "../assets/pulseNG.png"
import Amnet from "../assets/Amnet.png"
import digitX from "../assets/digitX.jpg"
import pulseCV from "../assets/pulse CV.jpg"
import pulseGH from "../assets/pulseGH.png"
import pulseKY from "../assets/pulseKY.png"
import pulseSN from "../assets/pulseSN.png"
import iab from "../assets/iab.png"
import ipropspet from "../assets/ipropspet.jpg"
import pulseUG from "../assets/pulseUG.png"
import google from "../assets/google.jpg"

export const Trusted = () => {
  return (
    <div style={{ padding: "50px" }}>
      <Flex justifyContent={"center"}>
        <Heading fontWeight={800} fontSize="62px">
          Trusted By
        </Heading>
      </Flex>
      <Flex mt="100px">
        <Marquee speed={60}>
          <Box>
            <img src={pulseNG} width={["100px", "", "", "200px"]} alt="" />
          </Box>
          <Box ml="30px">
            <img src={Amnet} width={["100px", "", "", "200px"]}  alt="" />
          </Box>
          <Box ml="30px">
            <img src={digitX} width={["100px", "", "", "200px"]} alt="" />
          </Box>
          <Box ml="30px">
            <img src={pulseCV} width={["100px", "", "", "200px"]} alt="" />
          </Box>
          <Box ml="30px">
            <img src={pulseGH} width={["100px", "", "", "200px"]} alt="" />
          </Box>
          <Box ml="30px">
            <img src={pulseKY} width={["100px", "", "", "200px"]} alt="" />
          </Box>
          <Box ml="30px">
            <img src={pulseSN} width={["100px", "", "", "200px"]} alt="" />
          </Box>
          <Box ml="30px">
            <img src={iab} width={["100px", "", "", "200px"]} alt="" />
          </Box>
          <Box ml="30px">
            <img src={ipropspet} width={["100px", "", "", "250px"]} alt="" />
          </Box>
          <Box ml="30px">
            <img src={pulseUG} width={["100px", "", "", "200px"]} alt="" />
          </Box>
          <Box ml="30px">
            <img src={google} width={["100px", "", "", "250px"]} alt="" />
          </Box>
        </Marquee>
      </Flex>
    </div>
  )
}
