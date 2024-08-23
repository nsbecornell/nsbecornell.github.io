// Chakra UI Components
import { Flex, Image, Center } from '@chakra-ui/react'

function ImageContainer(props: {src: string, alt: string}) {
  const boxStyling = {
    bg: "#2C2C2C",
    w: 300,
    h: 300,
    borderRadius: 25,
    my: 15
  };

  const imageStyling = {
    w: 250,
    h: 250
  }

  return (
    <Flex sx={boxStyling} justify="center">
      <Center>
        <Image sx={imageStyling} src={props.src} alt={props.alt} />
      </Center>
    </Flex>
  );
}

export default ImageContainer;