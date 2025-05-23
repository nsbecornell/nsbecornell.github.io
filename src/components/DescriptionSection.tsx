// Chakra UI Imports
import { Flex, Box, Heading, Text} from '@chakra-ui/react'

// Custom Imports
import ImageContainer from './ImageContainer';

const DescriptionSection = (props: {image: string; heading: string; text: string}) => {
  const textStyle = {
    color: "white",
    fontSize: {base: "20px", md: "22px"},
    lineHeight: 1.8,
    maxWidth: 500,
  };

  const headingStyling = {
    color: "white",
    fontSize: {
      base: "25", 
      md: "27"
    },
    my: 2,
    textAlign: "center"
  };

  const boxStyling = {
    _hover: {
      transform: "scale(1.05)",
    },
    transition: "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
  }
  
  return (
    <Flex
      sx={boxStyling}
      direction={{ base: "column", md: "row" }}
      align='center'
    >
      <ImageContainer src={props.image} alt="" imageHeight={150} imageWidth={150} containerHeight={200} containerWidth={200}/>
      <Flex direction='column' marginLeft="5%">
        <Heading sx={headingStyling}>{props.heading}</Heading>
        <Text sx={textStyle}>{props.text}</Text>
      </Flex>
    </Flex>
  )
}

export default DescriptionSection;