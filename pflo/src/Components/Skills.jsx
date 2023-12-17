import React from 'react';

import {  Box, Flex, Link, Text, Button, Image, Heading, Stack, keyframes} from "@chakra-ui/react";
import { motion } from 'framer-motion';

export default function Skill(){
  const animationKeyframes = keyframes`
  0% { transform:  rotate(0); }
  25% { transform:  rotate(5deg); }
  50% { transform:  rotate(0deg);  }
  75% { transform:  rotate(-5deg); }
  100% { transform:  rotate(0);}
`;
const animation = `${animationKeyframes} 2s ease-in-out infinite`;

    
    return <Box id="skills">
        {/* Skills cards */}

        {/* Example card */}
        <Heading as="h1" fontSize={["2.5em","3em","5.5em"]} fontWeight="700">Skills </Heading>
     
        <Box className="skills-card" w="100%" h="80%" >
        <Flex flexDir={["column-reverse","reverse-column","reverse-column","row"]} align="center" justify="space-around" p={["3em 0.5em","3em 0.5em","3em 0em","3em 0"]}>
        <Image src="skill.png" w="300px"></Image>
        <Flex flexDir="column" align="flex-end"  color="white" >
<Flex align="center" justify="center" gap="1.2em">
         <Stack>
         <Image src="html.png" w={["35px","50px","60px","70px"]}  as={motion.img}
         animation={animation}></Image><Text align="center">HTML</Text>

         </Stack>
         <Stack align="center">
         <Image src="js.png" w={["35px","50px","60px","70px"]} as={motion.img}
         animation={animation}></Image><Text>javaScript</Text>
         </Stack>
         <Stack>
         <Image src="css-3.png" w="70px" as={motion.img}
         animation={animation}></Image><Text align="center">CSS</Text>
         </Stack>
         <Stack>
         <Image src="java.png" w="70px" as={motion.img}
         animation={animation}></Image><Text align="center">Java</Text>
         </Stack>
         <Stack>
         <Image src="node.png" w="90px" as={motion.img}
         animation={animation}></Image><Text align="center">Node js</Text>
         </Stack>
{/* <Text>Redux</Text>
<Text>Express</Text>
<Text>mongoDb</Text> */}

</Flex>
<Flex justify="center" gap="30px" align="flex-end">
  <Stack>
         <Image src="react.png" w="80px" as={motion.img}
         animation={animation}></Image><Text align="center">React</Text>
         </Stack>
         <Stack>
         <Image src="redux.png" w="80px" as={motion.img}
         animation={animation}></Image><Text>Redux</Text>
         </Stack>
         <Stack>
         <Image src="chakra.png" w="75px" as={motion.img}
         animation={animation}></Image><Text>Chakra</Text>
         </Stack>
         <Stack>
         <Image src="github.png" w="80px" as={motion.img}
         animation={animation}></Image><Text align="center">Git</Text>
         </Stack>
        </Flex>
<Flex justify="center" gap="30px" align="flex-end">
  <Stack>
         <Image src="express.png" w="80px" as={motion.img}
         animation={animation}></Image><Text align="center">Express js</Text>
         </Stack>
         <Stack>
         <Image src="MongoDB.png" w="50px" as={motion.img}
         animation={animation}></Image><Text>MongoDB</Text>
         </Stack>
         <Stack>
         <Image src="firebase.png" w="50px" as={motion.img}
         animation={animation}></Image><Text>FireBase</Text>
         </Stack>
         </Flex>
         <Flex justify="center" gap="30px" align="flex-end">
  <Stack>
         <Image src="figma.png" w="70px" as={motion.img}
         animation={animation}></Image><Text align="center">Figma</Text>
         </Stack>
         
        </Flex>
        </Flex>
        </Flex>
        </Box>
        {/* Other skills section content */}
      
      </Box>
    
      }