import React from 'react';

import {  Box, Flex, Link, Text, Button, Image, Heading } from "@chakra-ui/react";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
export default function Contact(){
//     Contact elements must have the following IDs:
// GitHub profile link : id="contact-github"
// LinkedIn profile link : id="contact-linkedin"
// Phone number : id="contact-phone"
// Email address : id="contact-email"
    return <Box id="contact" w="100%" p="1em" bgGradient="linear(to-l, #C1D37F, #FF0080)"
    >  
    {/* Contact details */}

    {/* <Heading as="h1" fontSize="5.5em" fontWeight="700"> Contact</Heading> */}
    <Flex justify="center"  align="center">
{/* <Box p="3em" h="100%" w="40%" fontSize="1.4em" lineHeight="1.4em" >
    <Image w="500px"src="thankyou.png"></Image>

</Box> */}
<Flex flexDir="column" justify="center" align="center">

<Heading fontSize={["1em","1.2em","1.2em","1.4em"]}>IF YOU ARE KEEN ON MY WORK, DON'T HESITATE TO REACH OUT</Heading>

<Flex justify="space-between" gap="1.5em" align="center" p="1em 0">
<Link align="center"  id="contact-linkedin" href="https://linkedin.com/in/rishita-mukherjee-quest-podent" target="_blank">
<IoLogoLinkedin fontSize="40px"/> 
</Link>
<Link align="center"fontSize="2em"id="contact-github" href="https://github.com/riixxd" target="_blank"><FaGithub fontSize="40px" /></Link>

<Link href="mailto:thereforme06@gmail.com" align="center" fontSize="2em"id="contact-email"><IoIosMail fontSize="40px"/></Link>

</Flex>
<Flex align="center" fontSize="1.5em"id="contact-phone"><FaPhoneAlt fontSize="35px" />
<Text mx="0.5em">9310270176</Text></Flex>
</Flex>

    </Flex>
   
    {/* Other contact section content */}
  </Box>
      }