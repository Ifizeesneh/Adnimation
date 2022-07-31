import { Flex,Box } from "@chakra-ui/react";
import React, { useState } from "react";
import Logo from "../assets/AdnimationLogo.png"
import { BsChevronDown } from 'react-icons/bs';

import "../styles/Navigation.css";
export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo"> <img src={Logo} alt="" /></span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/#">Home</a>
        <a href="/#">About</a>
        <div class="dropdown"> <a href="/#"className="dropbtn"><Flex padding={"12px"} alignItems={"center"} ><Box>Services</Box> <BsChevronDown  /></Flex></a>
        <div class="dropdown-content">
    <a href="/#">Websites Ads Monetization</a>
    <a href="/#">Site Speed Optimization</a>
    <a href="/#">Direct Campaings</a>
    <a href="/#">Dynamic loading ads</a>
    <a href="/#">Revenue analytics</a>
    <a href="/#">Header bidding</a>
    <a href="/#">Ad revenue safety</a>
    <a href="/#">Video Monetization</a>

  </div></div>
 
  

        <a href="/#">Success</a>
        <a href="/#">Partners</a>
        <a href="/#">Blog</a>
        <a href="/#">Contact</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

