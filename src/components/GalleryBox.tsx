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
    bg: "#767676ff",
    mx: 8,
    my: 5,
    borderRadius: 8,
    h: {
      base: 750,
      md: 350
    },
    w: {
      base: 450,
      md: 300
    },
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
        <VStack
        >
          <Image
            borderRadius={8}
            width={
              {
                base: 300,
                md: 250
              }
            }
            h={
              {
                base: 450,
                md: 250
              }
            }
            objectFit="cover"
            src={props.image}
            alt=""
          />
          <VStack
            marginTop="3%"
          >
            <Text
              as="span"
              sx={textStyling}
              fontSize={
                {
                  base: 17,
                  md: 12,
                }
              }
              className={styles.positionTitle}
            >
              {props.position}
            </Text>
            <Text
              as="span"
              sx={textStyling}
              fontSize={
                {
                  base: 20,
                  md: 15,
                }
              }
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
