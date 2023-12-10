import React from 'react';
import Navbar from "./Navbar"
import About from "./About"

import {  Box, Flex, Link, Text, Button, Image, Heading } from "@chakra-ui/react";

export default function HomePage(){
    return <Box  bg="#eaeaea" p="2em">
              <Navbar/>

        <Flex flexDir="column" justify="center" align="center" id="home"  h="80vh" gap="20px">
        <Image src="HomePageImg.png" alt="flower"  />
        <Heading>Hey ! I am Rishita Mukherjee.</Heading>
      </Flex>
      <About/>
    </Box>
      }