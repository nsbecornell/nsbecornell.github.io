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

  return (
    <Center as="footer" marginTop={25}>
      <Flex direction="column">
          <Center>
          <HStack>
            <Image w={180} src={NSBECULogo.src} fallbackSrc="" alt="Logo of Cornell University National Society of Black Engineers"/>
            <VStack as="div">
              <Text as="address" sx={textStyle} fontStyle="normal" maxWidth={180}>146 Olin Hall Cornell University Ithaca, NY 14853</Text>
            </VStack>
            {/* <Divider orientation='vertical' mx={5} height={125} borderColor="#8D8D8D"/> */}
            <HStack spacing="15px">
              <Link href="https://www.instagram.com/nsbe_cu/?hl=en">
                <Icon.Instagram color="#8D8D8D" size={50}/>
              </Link>
              <Link href="https://www.linkedin.com/company/cu-nsbe/posts/?feedView=all">
                <Icon.Linkedin color="#8D8D8D" size={50}/>
              </Link>
            </HStack>
          </HStack>
        </Center>
        <Text sx={textStyle}>© 2024 Cornell University National Society of Black Engineers. All rights reserved.</Text>
      </Flex>
    </Center>
  );
}

export default Footer;