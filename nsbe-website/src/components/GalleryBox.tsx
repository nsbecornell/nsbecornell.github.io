import styles from "@/app/page.module.css";

// Components
import { Flex, Container, Grid, GridItem, VStack, Box, Center, Image, Text } from '@chakra-ui/react'

// Images
import Erhunmwunse from '@/images/EEgaphona - Cropped.jpg';

const GalleryBox = (props: {key: number, name: string, position: string, image: string}) => {  
  const imageStyling = {
    // overflow: 'hidden',
    borderRadius: 12
  };

  const textStyling = {
    color: "white",
    fontWeight: "bold"
  };

  const boxStyling = {
    bg: "#2C2C2C",
    mx: 12,
    borderRadius: 25,
    h: 350,
    w: 300
  }

  return (
    // Convert to GridRow component later, needs ChakraProvider
    <Flex direction='column' sx={boxStyling}>
      <Center h='inherit'>
        <VStack>
        <Image borderRadius={12} width={250} h={250} objectFit="fill" src={props.image} fallbackSrc="" alt=""/>
        <VStack>
          <Text sx={textStyling} fontSize={12} as="span" className={styles.positionTitle}>{props.position}</Text>
          <Text sx={textStyling} fontSize={15} as="span" className={styles.memberName}>{props.name}</Text>
        </VStack>
      </VStack>
      </Center>
      
    </Flex>
  );
}

export default GalleryBox;
