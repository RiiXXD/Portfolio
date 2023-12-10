import React from 'react';
import {Box,Text,Flex,Image, Heading } from "@chakra-ui/react";

export default function About(){
    return  <Box id="about" className="about section" w="100%">
        <Heading as="h1"> About</Heading>
        <Flex w="100%" justify="space-around">
            <Box w="50%" p="3em 0em" align="center">
            <Text align="left" id="user-detail-name">My name is Rishita Mukherjee</Text>
            <Text align="left"  id="user-detail-intro"> a curious and creative full-stack web developer on a mission to build meaningful digital experiences. From crafting sleek and intuitive user interfaces to architecting robust server-side solutions, I'm all about bringing ideas to life in the digital realm. With a passion for both frontend finesse and backend wizardry, I thrive in the dynamic world of web development. Let's collaborate and turn your concepts into interactive realities! Explore my portfolio to see how I blend technology and creativity to make things happen. Cheers to coding adventures! </Text>

            </Box>
            <Box>
<Image src="ProfilePic.png"/>
            </Box>
        </Flex>
    
  </Box>
}