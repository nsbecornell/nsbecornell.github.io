import {Flex, VStack, Box, Center, Text, Heading, border } from '@chakra-ui/react'

const TextContainer = (props: {title: string, message: string}) => {
  const boxStyling = {
    bg: "#2C2C2C",
    borderRadius: 23,
    w: 450
  }

  const textStyle = {
    color: "white",
    maxWidth: 375,
    wordWrap: "break-word"
  }

  return (
    <Flex sx={boxStyling} direction='column' wrap='wrap' align='center' justify="center">
      <Heading sx={textStyle} marginBottom={0} fontSize={20}>{props.title}</Heading>
      <Text sx={textStyle} fontSize={17}>{props.message}</Text>
    </Flex>
    // <Flex direction="column"  sx={boxStyling}>
    //   <Center>
    //     <Heading>{props.title}</Heading>
    //     <Text>{props.message}</Text>
    //   </Center>
    // </Flex>
  );
}

export default TextContainer;