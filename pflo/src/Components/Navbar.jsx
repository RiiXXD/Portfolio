import React from 'react';
import {Flex, Link,Button  } from "@chakra-ui/react";
export default function Navbar(){
   return <Flex id="nav-menu" justifyContent="space-between" p="4" border="1px solid #282120" color="#282120">
        {/* Other Navbar links */}
        <Link href="#home" className="nav-link home">Home</Link>
        <Link href="#about" className="nav-link about">About</Link>
        <Link href="#skills" className="nav-link skills">Skills</Link>
        <Link href="#projects" className="nav-link projects">Projects</Link>
        <Link href="#contact" className="nav-link contact">Contact</Link>
        <Button id="resume-button-1" as={Link} href="/path/to/resume.pdf" download>Resume</Button>
      </Flex>
}