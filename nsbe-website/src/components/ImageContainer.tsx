// Chakra UI Components
import { Flex, Image, Center } from '@chakra-ui/react'

function ImageContainer(props: {src: string, alt: string}) {
  const boxStyling = {
    bg: "#2C2C2C",
    w: 275,
    h: 275,
    borderRadius: 25,
    my: 15
  };

  const imageStyling = {
    w: 200,
    h: 200
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