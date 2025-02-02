// Chakra UI Imports
import { Image, Center, Divider, Flex, VStack, Text, Box, Link, Spacer, HStack} from '@chakra-ui/react';

// Images and Icons
import NSBECULogo from '@/images/nsbe-cu logo.png';
import * as Icon from 'react-bootstrap-icons'; 

const Footer = () => {
  const textStyle = {
    color: "#8D8D8D",
    fontSize: "20",
    fontWeight: "bold",
  }

  const iconStyling = {
    ":hover": {
      transform: "scale(1.05)",
    },
    transition: "transform 0.3s ease-in-out, background-color 0.3s ease-in-out"
  }

  return (
    <Center as="footer" marginTop={25}>
      <Flex flexDir="column" justifyContent="center" alignItems='center'>
        <HStack gap={6} justify='center' marginBottom={2.5}>
          <Image w="12%" src={NSBECULogo.src} fallbackSrc="" alt="Logo of Cornell University National Society of Black Engineers"/>
          <VStack as="div">
            <Text as="address" sx={textStyle} fontStyle="normal" maxWidth={180}>146 Olin Hall Cornell University Ithaca, NY 14853</Text>
          </VStack>
          <Divider orientation='vertical' height={100} borderColor="#8D8D8D"/>
          <HStack spacing="15px">
            <Link sx={iconStyling} href="https://www.instagram.com/nsbe_cu/?hl=en">
              <Icon.Instagram color="#8D8D8D" size={50}/>
            </Link>
            <Link sx={iconStyling} href="https://www.linkedin.com/company/cu-nsbe/posts/?feedView=all">
              <Icon.Linkedin color="#8D8D8D" size={50}/>
            </Link>
          </HStack>
        </HStack>
        <Text sx={textStyle}>© 2024 Cornell University National Society of Black Engineers. All rights reserved.</Text>
      </Flex>
    </Center>
  );
}

export default Footer;