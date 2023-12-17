import React ,{useState} from 'react';
import {Box,Flex, Link,Button,keyframes } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
export default function Navbar(){
  const [show,setShow]=useState(false);
  const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); border-radius: 20%; }
  25% { transform: scale(2) rotate(0); border-radius: 20%; }
  50% { transform: scale(2) rotate(270deg); border-radius: 50%; }
  75% { transform: scale(1) rotate(270deg); border-radius: 50%; }
  100% { transform: scale(1) rotate(0); border-radius: 20%; }
`;

const animation = `${animationKeyframes} 2s ease-in-out`;
function showmenu(){
  console.log(show)
  setShow(!show)
}
   return <Box position="sticky" top="1em" left="0" zIndex="20">    
        <Flex id="nav-menu" align="center"justifyContent="space-between" p="1em" bg="rgba(14,15,14,255)" border="1px solid #282120" color="#fab4b7" >
        {/* Other Navbar links */}
        <Box as={motion.div}
         animation={animation}
         // not work: transition={{ ... }}
         padding="2"
         // @ts-ignore - "Does not exist" Type Error against Motion
         bgGradient="linear(to-l, #C1D37F, #FF0080)"
         width="12"
         height="12"
         display="flex"
         fontFamily="Raleway, sans-serif"
         fontSize="2.5em"
         color="white" > ऋ</Box>
         <Flex w="50%" display={["none","none","flex","flex"]} justify="space-between">
        <Link href="#home" className="nav-link home">Home</Link>
        <Link href="#about" className="nav-link about">About</Link>
        <Link href="#skills" className="nav-link skills">Skills</Link>
        <Link href="#projects" className="nav-link projects">Projects</Link>
        <Link href="#contact" className="nav-link contact">Contact</Link>
        <Link href="resume.pdf"  download>
          <Button id="resume-button-1"  bg="#c1d37f">Resume</Button>
        </Link>
        </Flex>
        <Button bg="none" onClick={showmenu} display={["block","block","none","none"]}>
 { show ? <IoCloseSharp fontSize="2em"  color="#c1d37f"/> : <GiHamburgerMenu fontSize="2em"  color="#c1d37f"/>}        </Button>
      </Flex>
      <Box left="0em"w="100%" h="100vh" bg="black"  position="absolute" zIndex="14" display={show?"block":"none"} >
      <Flex flexDir="column" w="100%" fontSize="2em" p="1em" justify="center"  align="center" color="white" zIndex="16">
        <Link href="#home" className="nav-link home">Home</Link>
        <Link href="#about" className="nav-link about">About</Link>
        <Link href="#skills" className="nav-link skills">Skills</Link>
        <Link href="#projects" className="nav-link projects">Projects</Link>
        <Link href="#contact" className="nav-link contact">Contact</Link>
        <Link href="resume.pdf"  download>
          <Button id="resume-button-1"  bg="#c1d37f">Resume</Button>
        </Link>
        </Flex>
        {/* hey */}
      </Box>
   </Box>
}