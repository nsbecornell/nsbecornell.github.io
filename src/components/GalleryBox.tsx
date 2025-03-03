'use client'

import styles from "@/app/page.module.css";

// Components
import { Flex, VStack, Center, Image, Text } from '@chakra-ui/react'

// Images

const GalleryBox = (props: {key: number, name: string, position: string, image: string}) => {  
  const textStyling = {
    color: "white",
    fontWeight: "bold"
  };

  const boxStyling = {
    bg: "#2C2C2C",
    mx: 8,
    my: 5,
    borderRadius: 25,
    h: 350,
    w: 300,
    _hover: {
      bg: "#3A3A3A",
      transform: "scale(1.05)",
    },
    transition: "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
  }

  function handleClick() {
    console.log("Clicked");
  } 


  return (
    <Flex
      direction='column'
      sx={boxStyling}
      onClick={handleClick}
    >
      <Center
        h='inherit'
      >
        <VStack>
          <Image
            borderRadius={12}
            width={250}
            h={250}
            objectFit="fill"
            src={props.image}
            alt=""
          />
          <VStack
            marginTop="3%"
          >
            <Text
              as="span"
              sx={textStyling}
              fontSize={12}
              className={styles.positionTitle}
            >
              {props.position}
            </Text>
            <Text
              as="span"
              sx={textStyling}
              fontSize={15}
              className={styles.memberName}
            >
              {props.name}
            </Text>
          </VStack>
        </VStack>
      </Center>
    </Flex>
  );
}

export default GalleryBox;
