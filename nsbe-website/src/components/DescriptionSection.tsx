// Chakra UI Imports
import { Flex, Box, Heading, Text} from '@chakra-ui/react'

// Custom Imports
import ImageContainer from './ImageContainer';

const DescriptionSection = (props: {image: string; heading: string; text: string}) => {
  const textStyle = {
    color: "white",
    fontSize: "20",
    lineHeight: 1.8,
    maxWidth: 500
  };

  const headingStyling = {
    color: "white",
    fontSize: "30",
    my: 2,
  };

  const boxStyling = {
    _hover: {
      transform: "scale(1.05)",
    },
    transition: "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
  }
  
  return (
    <Flex sx={boxStyling} direction='row' align='center'>
      <ImageContainer src={props.image} alt="" imageHeight={150} imageWidth={150} containerHeight={200} containerWidth={200}/>
      <Flex direction='column' marginLeft="5%">
        <Heading sx={headingStyling}>{props.heading}</Heading>
        <Text sx={textStyle}>{props.text}</Text>
      </Flex>
    </Flex>
  )
}

export default DescriptionSection;