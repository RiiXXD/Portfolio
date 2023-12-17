import React from 'react';
import '@fontsource/sedgwick-ave-display';
import Navbar from "./Navbar"
import About from "./About"
import {  Box, Flex, Link, Button, Heading} from "@chakra-ui/react";
import Contact from './Contact';
import Work from './Work';
import Skill from './Skills';


export default function HomePage(){

    return<>  
    <Box w="100%" h="2em" bg="black" opacity="95%" zIndex="12" position="sticky" top="0"></Box>

    <Navbar/> 
    <Box  bg="rgba(14,15,14,255)" color="#fab4b7" p="0 2em">
                   


<Box h="85vh" my="0 2em">
        <Flex flexDir="column" h={["70%","70%","auto","auto"]} align="flex-start" justify={["center","center","flex-start","flex-start"]} id="home"  gap={["3.5em","4em","1em","10px"]}>
        {/* <Image src="HomePageImg.png" alt="flower"  /> */}
        <Heading  fontSize={["2em","3em","5em","6em"]} fontWeight="900" color="#c1d37f">Hey! I'm</Heading>

        <Heading  fontSize={["3.5em","3.5em","8em","11.5em"]} fontWeight="900">Rishita</Heading>
        <Heading fontSize={["3.5em","3.5em","8em","11.5em"]} fontWeight="900">Mukherjee</Heading>
       </Flex>

      <Flex  justify="flex-end"  align="center" p={[" 0em 0em"," 0em 3em"," 0em 3em"," 0em 3em"]}>
        <Link href="#contact">
      <Button p={["1em","1em","1em","1.5em"]} fontSize={["1em","1.5em","2em","2em"]} bg="#c1d37f" align="right" borderRadius="0.5em">CONTACT ME!</Button>
      </Link>
      </Flex>
      </Box>

      <About/>
      <Work/>

      <Skill/>

    </Box>
    <Contact/>

    </>
      }