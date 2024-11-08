// Chakra UI Imports
import { Flex, Box, Heading, Text} from '@chakra-ui/react'

// Custom Imports
import ImageContainer from './ImageContainer';

const DescriptionSection = (props: {image: string; heading: string; text: string}) => {
  const textStyle = {
    maxWidth: 500,
    color: "white",
    fontSize: 17
  }

  const headingStyle = {
    color: "white",
    my: 0
  }
  
  return (
    <Flex direction='row' align='center'>
      <ImageContainer src="" alt="" imageHeight={125} imageWidth={125} containerHeight={200} containerWidth={200}/>
      <Flex direction='column' marginLeft="5%">
        <Heading sx={headingStyle}>{props.heading}</Heading>
        <Text sx={textStyle}>{props.text}</Text>
      </Flex>
    </Flex>
  )
}

export default DescriptionSection;