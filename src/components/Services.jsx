import React from "react";
import {
  Heading,
  Container,
  Flex,
  Box,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

export const Services = () => {
  return (
    <div className="banner">
      <Container maxW="8xl">
        <Flex justifyContent={"center"}>
          <Heading
            pt="40px"
            color={"#FEFEFE"}
            fontWeight={800}
            fontSize={["22px", "22px", "22px", "36px"]}
          >
            A COMPLETE COLLECTION OF SERVICES{" "}
          </Heading>
        </Flex>

        <Flex wrap="wrap" justifyContent={"space-around"} py="40px" color={"#FEFEFE"}>
          <Box
          mb={10}>
            <Heading
              fontWeight={600}
              fontSize={["22px", "22px", "22px", "26px"]}
            >
              MANAGED
            </Heading>
            <UnorderedList mt="22px">
              <ListItem>Managed Services: Direct</ListItem>
              <ListItem>Ad Trafficking</ListItem>
              <ListItem>Campaign Management</ListItem>
              <ListItem>Creative Implementation & QA</ListItem>
              <ListItem>Campaign Reporting</ListItem>
              <ListItem>Managed Services: AdX + Open Bidding (OB)</ListItem>
              <ListItem>Programmatic Set Up</ListItem>
              <ListItem>Inventory Reporting & Forecasting</ListItem>
              <ListItem>Programmatic Reporting</ListItem>
              <ListItem>Video Monetization</ListItem>
              <ListItem>Media Buying</ListItem>
              <ListItem>Header Bidding</ListItem>
            </UnorderedList>
          </Box>
          <Box
            marginLeft="-6.5rem"
          >
            <Heading
              fontWeight={600}
              fontSize={["22px", "22px", "22px", "26px"]}
            >
              PROFESSIONAL
            </Heading>
            <UnorderedList mt="22px">
              <ListItem>Ad tag architecture</ListItem>
              <ListItem>Ad server set up & migrations</ListItem>
              <ListItem>Consulting & technical support</ListItem>
              <ListItem>Platform integrations</ListItem>
              <ListItem>Creative template design</ListItem>
              <ListItem>Ad product testing</ListItem>
              <ListItem>Google Analytics Reporting</ListItem>
              <ListItem>Site speed optimization</ListItem>
            </UnorderedList>
          </Box>
        </Flex>
      </Container>
    </div>
  );
};
