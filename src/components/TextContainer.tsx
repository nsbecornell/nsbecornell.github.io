import {Flex, HStack, Box, Center, Text, Heading, border } from '@chakra-ui/react'

const TextContainer = (props: {title: string, message: string}) => {
  const boxStyling = {
    bg: "#2C2C2C",
    borderRadius: 23,
    w: "50%",
    _hover: {
      transform: "scale(1.05)",
    },
    transition: "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
  }

  const textStyle = {
    color: "white",
    maxWidth: "90%",
    wordWrap: "break-word"
  }

  return (
    <HStack sx={boxStyling} direction='column' wrap='wrap' align='center' justify="center" w="fit-content" gap={5} padding={5}>
      <Heading sx={textStyle} marginBottom={0} fontSize={25}>{props.title}</Heading>
      <Text sx={textStyle} fontSize={20}>{props.message}</Text>
    </HStack>
  );
}

export default TextContainer;