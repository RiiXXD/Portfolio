import React from 'react';
import {Box,Text,Flex,Image, Heading, Highlight } from "@chakra-ui/react";

export default function About(){
    return  <Box id="about" className="about section" w="100%" >
        <Heading as="h1" fontSize={["2.5em","3em","5.5em"]} fontWeight="700"> About</Heading>
        <Flex w="100%" flexDir={["column","column","row","row"]} align={["space-between","space-between","center","center"]} justify={["center","center","space-around","space-around"]} fontSize="1.4em" >
            <Box w={["100%","90%","50%","45%"]} p="2em 0em" align="center" fontSize={["0.7em","1em","1em","1.2em"]}>
            <Text align="left" id="user-detail-name" lineHeight={["1.5em","1.3em","1.5em","1.5em"]}>Hello there! My name is Rishita Mukherjee...</Text>
            <Text align="left"  id="user-detail-intro" lineHeight={["1.5em","1.3em","1.5em","1.5em"]}> <Highlight  query='Full-stack web developer'
    styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}>  As a curious and creative Full-stack web developer on a mission to build meaningful digital experiences. From crafting sleek and intuitive user interfaces to architecting robust server-side solutions, I'm all about bringing ideas to life in the digital realm. With a passion for both frontend finesse and backend wizardry, I thrive in the dynamic world of web development. Let's collaborate and turn your concepts into interactive realities! Explore my portfolio to see how I blend technology and creativity to make things happen. Cheers to coding adventures! 
    </Highlight>  
    </Text>

            </Box>
            <Box align="center">
<Image src="ProfilePic.png"/>
            </Box>
        </Flex>
    
  </Box>
}